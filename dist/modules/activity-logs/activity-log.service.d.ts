import { PrismaService } from '../../common/prisma/prisma.service';
import { ActivityLogDto } from './dto/activity-log.dto';
export declare class ActivityLogService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Omit<ActivityLogDto, 'id' | 'createdAt'>): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        userId: string | null;
        adminId: string | null;
        action: string;
        resourceType: string | null;
        resourceId: string | null;
        ipAddress: string | null;
        userAgent: string | null;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
    }>;
    findAll(): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        userId: string | null;
        adminId: string | null;
        action: string;
        resourceType: string | null;
        resourceId: string | null;
        ipAddress: string | null;
        userAgent: string | null;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        userId: string | null;
        adminId: string | null;
        action: string;
        resourceType: string | null;
        resourceId: string | null;
        ipAddress: string | null;
        userAgent: string | null;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
    }>;
    update(id: string, data: Partial<Omit<ActivityLogDto, 'id' | 'createdAt'>>): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        userId: string | null;
        adminId: string | null;
        action: string;
        resourceType: string | null;
        resourceId: string | null;
        ipAddress: string | null;
        userAgent: string | null;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        userId: string | null;
        adminId: string | null;
        action: string;
        resourceType: string | null;
        resourceId: string | null;
        ipAddress: string | null;
        userAgent: string | null;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
    }>;
}
