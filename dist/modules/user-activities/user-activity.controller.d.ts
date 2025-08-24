import { UserActivityService } from './user-activity.service';
import { UserActivityDto } from './dto/user-activity.dto';
export declare class UserActivityController {
    private readonly service;
    constructor(service: UserActivityService);
    create(data: Omit<UserActivityDto, 'id'>): Promise<{
        id: string;
        userId: string;
        activityType: string;
        title: string;
        description: string | null;
        icon: string | null;
        color: string | null;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        createdAt: Date;
    }>;
    findAll(): Promise<({
        user: {
            id: string;
            createdAt: Date;
            name: string;
            email: string;
            phone: string | null;
            birthDate: Date | null;
            address: string | null;
            city: string | null;
            country: string;
            company: string | null;
            position: string | null;
            avatarUrl: string | null;
            passwordHash: string | null;
            googleId: string | null;
            emailVerified: boolean;
            isActive: boolean;
            preferredContactMethod: string;
            updatedAt: Date;
            lastLogin: Date | null;
        };
    } & {
        id: string;
        userId: string;
        activityType: string;
        title: string;
        description: string | null;
        icon: string | null;
        color: string | null;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        createdAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        user: {
            id: string;
            createdAt: Date;
            name: string;
            email: string;
            phone: string | null;
            birthDate: Date | null;
            address: string | null;
            city: string | null;
            country: string;
            company: string | null;
            position: string | null;
            avatarUrl: string | null;
            passwordHash: string | null;
            googleId: string | null;
            emailVerified: boolean;
            isActive: boolean;
            preferredContactMethod: string;
            updatedAt: Date;
            lastLogin: Date | null;
        };
    } & {
        id: string;
        userId: string;
        activityType: string;
        title: string;
        description: string | null;
        icon: string | null;
        color: string | null;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        createdAt: Date;
    }>;
    update(id: string, data: Partial<Omit<UserActivityDto, 'id'>>): Promise<{
        id: string;
        userId: string;
        activityType: string;
        title: string;
        description: string | null;
        icon: string | null;
        color: string | null;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        createdAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        userId: string;
        activityType: string;
        title: string;
        description: string | null;
        icon: string | null;
        color: string | null;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        createdAt: Date;
    }>;
}
