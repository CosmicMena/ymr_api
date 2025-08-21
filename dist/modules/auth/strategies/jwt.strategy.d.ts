import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../../common/prisma/prisma.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private prisma;
    constructor(configService: ConfigService, prisma: PrismaService);
    validate(payload: any): Promise<{
        userId: string;
        email: string;
        name: string;
        userType: string;
        role?: undefined;
        permissions?: undefined;
    } | {
        userId: string;
        email: string;
        name: string;
        userType: string;
        role: any;
        permissions: any;
    }>;
}
export {};
