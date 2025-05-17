"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const bcrypt = require("bcrypt");
const config_1 = require("@nestjs/config");
const ioredis_1 = require("ioredis");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    userService;
    jwt;
    config;
    redisClient;
    jwtService;
    constructor(userService, jwt, config, redisClient, jwtService) {
        this.userService = userService;
        this.jwt = jwt;
        this.config = config;
        this.redisClient = redisClient;
        this.jwtService = jwtService;
    }
    cookieOptions = {
        httpOnly: false,
        secure: false,
        sameSite: 'lax',
        path: '/'
    };
    async tokenGenerate(payload) {
        const accessToken = this.jwt.sign(payload, {
            secret: this.config.get('JWT_SECRET'),
            expiresIn: '15m',
        });
        const refreshToken = this.jwt.sign(payload, {
            secret: this.config.get('JWT_REFRESH_SECRET'),
            expiresIn: '7d',
        });
        return { accessToken, refreshToken };
    }
    async saveSession(res, accessToken, refreshToken, user) {
        await this.redisClient.set(user.id.toString(), refreshToken, 'EX', 7 * 24 * 60 * 60);
        res.cookie('accessToken', accessToken, {
            ...this.cookieOptions,
            maxAge: 15 * 60 * 1000,
        });
        res.cookie('refreshToken', refreshToken, {
            ...this.cookieOptions,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        res.cookie('userId', user.id.toString(), {
            ...this.cookieOptions,
            httpOnly: false,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        return { user, accessToken };
    }
    async register(res, dto) {
        const isExist = await this.userService.getUserByEmail(dto.email);
        if (isExist) {
            throw new common_1.ConflictException('Введите другой email, этот email уже зарегистрирован');
        }
        const user = await this.userService.create(dto);
        const payload = { sub: user.id, email: user.email };
        const { accessToken, refreshToken } = await this.tokenGenerate(payload);
        return this.saveSession(res, accessToken, refreshToken, user);
    }
    async login(res, dto) {
        const user = await this.userService.getUserByEmail(dto.email);
        if (!user || !user.password) {
            throw new common_1.NotFoundException('Пользователь не найден');
        }
        const isValidPassword = await bcrypt.compare(dto.password, user.password);
        if (!isValidPassword) {
            throw new common_1.NotFoundException('Неверный пароль');
        }
        const payload = { sub: user.id, email: user.email };
        const { accessToken, refreshToken } = await this.tokenGenerate(payload);
        return this.saveSession(res, accessToken, refreshToken, user);
    }
    async logout(req, res) {
        const accessToken = req.cookies['accessToken'];
        if (accessToken) {
            await this.redisClient.del(accessToken.toString());
        }
        res.clearCookie('accessToken', { httpOnly: true, path: '/' });
        res.clearCookie('refreshToken', { httpOnly: true, path: '/' });
        res.clearCookie('userId', { path: '/' });
        res.status(200).json({ message: 'Вы вышли из системы' });
    }
    async refreshToken(req, res) {
        const { refreshToken, userId } = req.cookies;
        if (!refreshToken || !userId) {
            throw new common_1.UnauthorizedException('Нет токена');
        }
        const storedToken = await this.redisClient.get(userId);
        if (!storedToken || storedToken !== refreshToken) {
            throw new common_1.UnauthorizedException('Неверный токен');
        }
        try {
            const user = await this.userService.getUserById(userId);
            if (!user) {
                throw new common_1.UnauthorizedException('Пользователя не существует');
            }
            const payload = { sub: user.id, email: user.email };
            const { accessToken, refreshToken: newRefreshToken } = await this.tokenGenerate(payload);
            return this.saveSession(res, accessToken, newRefreshToken, user);
        }
        catch (err) {
            throw new common_1.UnauthorizedException('Невалидный refreshToken');
        }
    }
    async me(req) {
        const { accessToken, userId } = req.cookies;
        if (!accessToken || !userId)
            throw new common_1.UnauthorizedException();
        try {
            const decoded = this.jwtService.verify(accessToken, { secret: this.config.get('JWT_SECRET') });
            if (decoded.sub.toString() !== userId)
                throw new common_1.UnauthorizedException();
            const user = await this.userService.getUserById(userId);
            if (!user)
                throw new common_1.UnauthorizedException();
            return { user };
        }
        catch {
            throw new common_1.UnauthorizedException();
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, common_1.Inject)('REDIS_CLIENT')),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        config_1.ConfigService,
        ioredis_1.default,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map