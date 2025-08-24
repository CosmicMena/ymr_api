import { UserActivityService } from './user-activity.service';
import { UserActivityDto } from './dto/user-activity.dto';
export declare class UserActivityController {
    private readonly service;
    constructor(service: UserActivityService);
    create(data: Omit<UserActivityDto, 'id'>): Promise<{
        description: string | null;
        title: string;
        id: string;
        createdAt: Date;
        userId: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        color: string | null;
        activityType: string;
        icon: string | null;
    }>;
    findAll(): Promise<({
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
        description: string | null;
        title: string;
        id: string;
        createdAt: Date;
        userId: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        color: string | null;
        activityType: string;
        icon: string | null;
    })[]>;
    findOne(id: string): Promise<{
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
        description: string | null;
        title: string;
        id: string;
        createdAt: Date;
        userId: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        color: string | null;
        activityType: string;
        icon: string | null;
    }>;
    update(id: string, data: Partial<Omit<UserActivityDto, 'id'>>): Promise<{
        description: string | null;
        title: string;
        id: string;
        createdAt: Date;
        userId: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        color: string | null;
        activityType: string;
        icon: string | null;
    }>;
    remove(id: string): Promise<{
        description: string | null;
        title: string;
        id: string;
        createdAt: Date;
        userId: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        color: string | null;
        activityType: string;
        icon: string | null;
    }>;
}
