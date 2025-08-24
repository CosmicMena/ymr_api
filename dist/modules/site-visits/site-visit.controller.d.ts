import { SiteVisitService } from './site-visit.service';
import { SiteVisitDto, SiteVisitFilterDto } from './dto/site-visit.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { SuccessResponseDto } from '../../common/dto/response.dto';
export declare class SiteVisitController {
    private readonly service;
    constructor(service: SiteVisitService);
    create(data: Omit<SiteVisitDto, 'createdAt'>): Promise<SuccessResponseDto<{
        id: string;
        city: string | null;
        country: string | null;
        createdAt: Date;
        userId: string | null;
        ipAddress: string;
        userAgent: string | null;
        sessionId: string | null;
        referer: string | null;
        pageUrl: string | null;
        region: string | null;
        latitude: import("@prisma/client/runtime/library").Decimal | null;
        longitude: import("@prisma/client/runtime/library").Decimal | null;
        visitDuration: number | null;
    }>>;
    findAll(pagination: PaginationDto, filter: SiteVisitFilterDto): Promise<SuccessResponseDto<{
        data: ({
            user: {
                name: string;
                email: string;
                phone: string | null;
                company: string | null;
                id: string;
                googleId: string | null;
                birthDate: Date | null;
                address: string | null;
                city: string | null;
                country: string;
                position: string | null;
                avatarUrl: string | null;
                passwordHash: string | null;
                emailVerified: boolean;
                isActive: boolean;
                preferredContactMethod: string;
                createdAt: Date;
                updatedAt: Date;
                lastLogin: Date | null;
            };
        } & {
            id: string;
            city: string | null;
            country: string | null;
            createdAt: Date;
            userId: string | null;
            ipAddress: string;
            userAgent: string | null;
            sessionId: string | null;
            referer: string | null;
            pageUrl: string | null;
            region: string | null;
            latitude: import("@prisma/client/runtime/library").Decimal | null;
            longitude: import("@prisma/client/runtime/library").Decimal | null;
            visitDuration: number | null;
        })[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>>;
    findOne(id: string): Promise<SuccessResponseDto<{
        user: {
            name: string;
            email: string;
            phone: string | null;
            company: string | null;
            id: string;
            googleId: string | null;
            birthDate: Date | null;
            address: string | null;
            city: string | null;
            country: string;
            position: string | null;
            avatarUrl: string | null;
            passwordHash: string | null;
            emailVerified: boolean;
            isActive: boolean;
            preferredContactMethod: string;
            createdAt: Date;
            updatedAt: Date;
            lastLogin: Date | null;
        };
    } & {
        id: string;
        city: string | null;
        country: string | null;
        createdAt: Date;
        userId: string | null;
        ipAddress: string;
        userAgent: string | null;
        sessionId: string | null;
        referer: string | null;
        pageUrl: string | null;
        region: string | null;
        latitude: import("@prisma/client/runtime/library").Decimal | null;
        longitude: import("@prisma/client/runtime/library").Decimal | null;
        visitDuration: number | null;
    }>>;
    remove(id: string): Promise<SuccessResponseDto<any>>;
}
