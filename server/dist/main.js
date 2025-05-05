"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const ioredis_1 = require("ioredis");
const platform_express_1 = require("@nestjs/platform-express");
const session = require("express-session");
const connectRedis = require("connect-redis");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new config_1.ConfigService();
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true
    }));
    app.use(cookieParser());
    const redisClient = new ioredis_1.default({
        host: config.getOrThrow('REDIS_HOST'),
        port: config.getOrThrow('REDIS_PORT'),
        db: 0,
    });
    app.use(session({
        store: new connectRedis.RedisStore({ client: redisClient }),
        name: config.getOrThrow('SESSION_NAME'),
        secret: config.getOrThrow('COOKIE_SECRET'),
        resave: true,
        cookie: {
            httpOnly: config.getOrThrow('SESSION_HTTP_ONLY'),
            secure: config.getOrThrow('SESSION_SECURE'),
            maxAge: 3600000,
            sameSite: "lax",
            domain: "localhost"
        },
    }));
    app.use((req, res, next) => {
        console.log('Текущая сессия:', req.session);
        next();
    });
    app.enableCors({
        origin: config.getOrThrow('USER_URL'),
        credentials: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    });
    const httpAdapter = app.getHttpAdapter();
    if (httpAdapter instanceof platform_express_1.ExpressAdapter) {
        const instance = httpAdapter.getInstance();
        instance.set('REDIS_CLIENT', redisClient);
    }
    await app.listen(config.getOrThrow('SERVER_PORT') ?? 3000);
    console.log(config.getOrThrow('SERVER_PORT'));
}
bootstrap();
//# sourceMappingURL=main.js.map