import { UserStatisticsService } from './user-statistics.service';
import { UserStatisticsDto } from './dto/user-statistics.dto';
export declare class UserStatisticsController {
    private readonly service;
    constructor(service: UserStatisticsService);
    create(data: Omit<UserStatisticsDto, 'id'>): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        updatedAt: Date;
        ordersCount: number;
        consultationsCount: number;
        rentalsCount: number;
        loyaltyPoints: number;
        totalSpent: import("@prisma/client/runtime/library").Decimal;
        lastActivity: Date | null;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        updatedAt: Date;
        ordersCount: number;
        consultationsCount: number;
        rentalsCount: number;
        loyaltyPoints: number;
        totalSpent: import("@prisma/client/runtime/library").Decimal;
        lastActivity: Date | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        updatedAt: Date;
        ordersCount: number;
        consultationsCount: number;
        rentalsCount: number;
        loyaltyPoints: number;
        totalSpent: import("@prisma/client/runtime/library").Decimal;
        lastActivity: Date | null;
    }>;
    findByUserId(userId: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        updatedAt: Date;
        ordersCount: number;
        consultationsCount: number;
        rentalsCount: number;
        loyaltyPoints: number;
        totalSpent: import("@prisma/client/runtime/library").Decimal;
        lastActivity: Date | null;
    }>;
    update(id: string, data: Partial<Omit<UserStatisticsDto, 'id'>>): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        updatedAt: Date;
        ordersCount: number;
        consultationsCount: number;
        rentalsCount: number;
        loyaltyPoints: number;
        totalSpent: import("@prisma/client/runtime/library").Decimal;
        lastActivity: Date | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        updatedAt: Date;
        ordersCount: number;
        consultationsCount: number;
        rentalsCount: number;
        loyaltyPoints: number;
        totalSpent: import("@prisma/client/runtime/library").Decimal;
        lastActivity: Date | null;
    }>;
}
