import { JwtPayload } from './interface/interface';
import { ConfigService } from '@nestjs/config';
declare const JwtStrategy_base: new (...args: any) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly config;
    constructor(config: ConfigService);
    validate(payload: JwtPayload): Promise<{
        userId: string;
        username: string;
    }>;
}
export {};
