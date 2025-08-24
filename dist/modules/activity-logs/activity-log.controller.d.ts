import { ActivityLogService } from './activity-log.service';
import { ActivityLogDto } from './dto/activity-log.dto';
export declare class ActivityLogController {
    private readonly activityLogService;
    constructor(activityLogService: ActivityLogService);
    create(data: Omit<ActivityLogDto, 'id' | 'createdAt'>): Promise<{
        id: string;
        createdAt: Date;
        userId: string | null;
        adminId: string | null;
        action: string;
        description: string | null;
        resourceType: string | null;
        resourceId: string | null;
        ipAddress: string | null;
        userAgent: string | null;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        userId: string | null;
        adminId: string | null;
        action: string;
        description: string | null;
        resourceType: string | null;
        resourceId: string | null;
        ipAddress: string | null;
        userAgent: string | null;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string | null;
        adminId: string | null;
        action: string;
        description: string | null;
        resourceType: string | null;
        resourceId: string | null;
        ipAddress: string | null;
        userAgent: string | null;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
    }>;
    update(id: string, data: Partial<Omit<ActivityLogDto, 'id' | 'createdAt'>>): Promise<{
        id: string;
        createdAt: Date;
        userId: string | null;
        adminId: string | null;
        action: string;
        description: string | null;
        resourceType: string | null;
        resourceId: string | null;
        ipAddress: string | null;
        userAgent: string | null;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string | null;
        adminId: string | null;
        action: string;
        description: string | null;
        resourceType: string | null;
        resourceId: string | null;
        ipAddress: string | null;
        userAgent: string | null;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
    }>;
}
