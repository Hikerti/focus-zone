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
const prisma_service_1 = require("../prisma/prisma.service");
const user_service_1 = require("../user/user.service");
const bcrypt = require("bcrypt");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    userService;
    prisma;
    jwt;
    config;
    constructor(userService, prisma, jwt, config) {
        this.userService = userService;
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
    }
    async register(req, dto) {
        const isExist = await this.userService.getUserByEmail(dto.email);
        if (isExist) {
            throw new common_1.ConflictException("Введите другой email, этот email уже зареги");
        }
        const user = await this.userService.create(dto);
        const payload = { sub: user.id, email: user.email };
        const accessToken = this.jwt.sign(payload);
        return this.saveSeccion(req, accessToken, user);
    }
    async login(req, dto) {
        const user = await this.userService.getUserByEmail(dto.email);
        if (!user || !user.password) {
            throw new common_1.NotFoundException('Пользователь не найден');
        }
        const isValidPassword = await bcrypt.compare(dto.password, user.password);
        if (!isValidPassword) {
            throw new common_1.NotFoundException('Неверный пароль');
        }
        return user;
    }
    async logout(req, res) {
        return new Promise((resolve, reject) => {
            req.session.destroy((err) => {
                if (err) {
                    return reject(new common_1.InternalServerErrorException('Не удалось завершить сессию'));
                }
                res.clearCookie(this.config.getOrThrow('SESSION_NAME'));
                res.clearCookie('jwt');
                res.clearCookie('connect.sid');
                resolve();
            });
        });
    }
    saveSeccion(req, accessToken, user) {
        return new Promise((res, reject) => {
            req.session.userId = user.id;
            req.session.jwt = accessToken;
            req.session.save(err => {
                if (err) {
                    return reject(new common_1.InternalServerErrorException('Не удалось сохранить сессию'));
                }
                res({ user });
                res({ accessToken });
            });
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map