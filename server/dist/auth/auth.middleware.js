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
exports.AuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const user_service_1 = require("../user/user.service");
const ioredis_1 = require("ioredis");
let AuthMiddleware = class AuthMiddleware {
    jwt;
    config;
    userService;
    redisClient;
    constructor(jwt, config, userService, redisClient) {
        this.jwt = jwt;
        this.config = config;
        this.userService = userService;
        this.redisClient = redisClient;
    }
    async use(req, res, next) {
        const { accessToken, refreshToken, userId } = req.cookies;
        console.log({ accessToken, refreshToken, userId });
        if (!accessToken || !userId) {
            throw new common_1.UnauthorizedException('Не авторизован');
        }
        try {
            const decoded = this.jwt.verify(accessToken, {
                secret: this.config.get('JWT_SECRET'),
            });
            if (decoded.sub.toString() !== userId.toString()) {
                throw new common_1.UnauthorizedException('Неверный токен');
            }
            const user = await this.userService.getUserById(userId);
            if (!user)
                throw new common_1.UnauthorizedException('Пользователь не найден');
            req['user'] = user;
            next();
        }
        catch (err) {
            if (refreshToken && userId) {
                const storedToken = await this.redisClient.get(userId);
                if (storedToken === refreshToken) {
                    try {
                        const user = await this.userService.getUserById(userId);
                        if (!user)
                            throw new common_1.UnauthorizedException('Пользователь не найден');
                        req['user'] = user;
                        next();
                    }
                    catch (e) {
                        throw new common_1.UnauthorizedException('Невалидный refreshToken');
                    }
                }
                else {
                    throw new common_1.UnauthorizedException('RefreshToken не совпадает');
                }
            }
            else {
                throw new common_1.UnauthorizedException('Токен истёк и нет refreshToken');
            }
        }
    }
};
exports.AuthMiddleware = AuthMiddleware;
exports.AuthMiddleware = AuthMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, common_1.Inject)('REDIS_CLIENT')),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService,
        user_service_1.UserService,
        ioredis_1.Redis])
], AuthMiddleware);
//# sourceMappingURL=auth.middleware.js.map