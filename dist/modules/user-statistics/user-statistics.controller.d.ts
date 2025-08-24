import { UserStatisticsService } from './user-statistics.service';
import { UserStatisticsDto } from './dto/user-statistics.dto';
export declare class UserStatisticsController {
    private readonly service;
    constructor(service: UserStatisticsService);
    create(data: Omit<UserStatisticsDto, 'id'>): Promise<{
        id: string;
        userId: string;
        ordersCount: number;
        consultationsCount: number;
        rentalsCount: number;
        loyaltyPoints: number;
        totalSpent: import("@prisma/client/runtime/library").Decimal;
        lastActivity: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        userId: string;
        ordersCount: number;
        consultationsCount: number;
        rentalsCount: number;
        loyaltyPoints: number;
        totalSpent: import("@prisma/client/runtime/library").Decimal;
        lastActivity: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        userId: string;
        ordersCount: number;
        consultationsCount: number;
        rentalsCount: number;
        loyaltyPoints: number;
        totalSpent: import("@prisma/client/runtime/library").Decimal;
        lastActivity: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findByUserId(userId: string): Promise<{
        id: string;
        userId: string;
        ordersCount: number;
        consultationsCount: number;
        rentalsCount: number;
        loyaltyPoints: number;
        totalSpent: import("@prisma/client/runtime/library").Decimal;
        lastActivity: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, data: Partial<Omit<UserStatisticsDto, 'id'>>): Promise<{
        id: string;
        userId: string;
        ordersCount: number;
        consultationsCount: number;
        rentalsCount: number;
        loyaltyPoints: number;
        totalSpent: import("@prisma/client/runtime/library").Decimal;
        lastActivity: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        userId: string;
        ordersCount: number;
        consultationsCount: number;
        rentalsCount: number;
        loyaltyPoints: number;
        totalSpent: import("@prisma/client/runtime/library").Decimal;
        lastActivity: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
