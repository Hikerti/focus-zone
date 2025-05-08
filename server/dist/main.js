"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const session = require("express-session");
const connect_redis_1 = require("connect-redis");
const Redis = require("ioredis");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new config_1.ConfigService();
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true
    }));
    app.enableCors({
        origin: config.getOrThrow('USER_URL'),
        credentials: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    });
    const RedisClient = Redis.default;
    const redisClient = new RedisClient({
        host: config.getOrThrow('REDIS_HOST'),
        port: config.getOrThrow('REDIS_PORT')
    });
    const redisStore = new connect_redis_1.RedisStore({
        client: redisClient,
        prefix: 'sess:',
    });
    app.use(cookieParser());
    app.use(session({
        store: redisStore,
        secret: config.getOrThrow('SESSION_SECRET'),
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: config.getOrThrow('SESSION_HTTP_ONLY'),
            secure: config.getOrThrow('SESSION_SECURE'),
            maxAge: 24 * 60 * 60 * 1000,
            path: '/',
        }
    }));
    await app.listen(config.getOrThrow('SERVER_PORT') ?? 3000);
    console.log(config.getOrThrow('SERVER_PORT'));
}
bootstrap();
//# sourceMappingURL=main.js.map