import { UserActivityService } from './user-activity.service';
import { UserActivityDto } from './dto/user-activity.dto';
export declare class UserActivityController {
    private readonly service;
    constructor(service: UserActivityService);
    create(data: Omit<UserActivityDto, 'id'>): Promise<{
        id: string;
        description: string | null;
        color: string | null;
        createdAt: Date;
        userId: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        activityType: string;
        title: string;
        icon: string | null;
    }>;
    findAll(): Promise<({
        user: {
            id: string;
            name: string;
            isActive: boolean;
            createdAt: Date;
            country: string;
            city: string | null;
            email: string;
            phone: string | null;
            birthDate: Date | null;
            address: string | null;
            company: string | null;
            position: string | null;
            avatarUrl: string | null;
            passwordHash: string | null;
            googleId: string | null;
            emailVerified: boolean;
            preferredContactMethod: string;
            updatedAt: Date;
            lastLogin: Date | null;
        };
    } & {
        id: string;
        description: string | null;
        color: string | null;
        createdAt: Date;
        userId: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        activityType: string;
        title: string;
        icon: string | null;
    })[]>;
    findOne(id: string): Promise<{
        user: {
            id: string;
            name: string;
            isActive: boolean;
            createdAt: Date;
            country: string;
            city: string | null;
            email: string;
            phone: string | null;
            birthDate: Date | null;
            address: string | null;
            company: string | null;
            position: string | null;
            avatarUrl: string | null;
            passwordHash: string | null;
            googleId: string | null;
            emailVerified: boolean;
            preferredContactMethod: string;
            updatedAt: Date;
            lastLogin: Date | null;
        };
    } & {
        id: string;
        description: string | null;
        color: string | null;
        createdAt: Date;
        userId: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        activityType: string;
        title: string;
        icon: string | null;
    }>;
    update(id: string, data: Partial<Omit<UserActivityDto, 'id'>>): Promise<{
        id: string;
        description: string | null;
        color: string | null;
        createdAt: Date;
        userId: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        activityType: string;
        title: string;
        icon: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        description: string | null;
        color: string | null;
        createdAt: Date;
        userId: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        activityType: string;
        title: string;
        icon: string | null;
    }>;
}
