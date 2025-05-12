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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const bcrypt = require("bcrypt");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    userService;
    jwt;
    config;
    constructor(userService, jwt, config) {
        this.userService = userService;
        this.jwt = jwt;
        this.config = config;
    }
    async register(res, req, dto) {
        const isExist = await this.userService.getUserByEmail(dto.email);
        if (isExist) {
            throw new common_1.ConflictException("Введите другой email, этот email уже зареги");
        }
        const user = await this.userService.create(dto);
        const payload = { sub: user.id, email: user.email };
        const accessToken = this.jwt.sign(payload);
        return this.saveSession(res, req, accessToken, user);
    }
    async login(res, req, dto) {
        const user = await this.userService.getUserByEmail(dto.email);
        if (!user || !user.password) {
            throw new common_1.NotFoundException('Пользователь не найден');
        }
        const isValidPassword = await bcrypt.compare(dto.password, user.password);
        if (!isValidPassword) {
            throw new common_1.NotFoundException('Неверный пароль');
        }
        const payload = { sub: user.id, email: user.email };
        const accessToken = this.jwt.sign(payload);
        return this.saveSession(res, req, accessToken, user);
    }
    async logout(req, res) {
        return new Promise((resolve, reject) => {
            req.session.destroy((err) => {
                if (err) {
                    return reject(new common_1.InternalServerErrorException('Не удалось завершить сессию'));
                }
                console.log('Session destroyed:', req.sessionID);
                res.clearCookie(this.config.getOrThrow('SESSION_NAME'), { path: '/' });
                res.status(200).json({ message: 'Сессия завершена' });
                return resolve();
            });
        });
    }
    async saveSession(res, req, accessToken, user) {
        try {
            const cookieOptions = {
                httpOnly: true,
                secure: this.config.getOrThrow('USER_SECURE') === 'true',
                sameSite: 'none',
                maxAge: 24 * 60 * 60 * 1000,
                path: '/',
            };
            return new Promise((resolve, reject) => {
                res.cookie('jwt', accessToken, cookieOptions);
                res.cookie('userId', user.id.toString(), { ...cookieOptions, httpOnly: false });
                req.session.userId = user.id;
                req.session.jwt = accessToken;
                req.session.save((err) => {
                    if (err) {
                        return reject(new common_1.InternalServerErrorException('Не удалось сохранить сессию'));
                    }
                    resolve({ user, accessToken });
                });
            });
        }
        catch (error) {
            res.status(400).json({ error: 'Ошибка при сохранении сессии' });
            throw error;
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map