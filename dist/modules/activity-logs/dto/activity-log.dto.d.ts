export declare class ActivityLogDto {
    id: string;
    userId?: string;
    adminId?: string;
    action: string;
    description?: string;
    resourceType?: string;
    resourceId?: string;
    ipAddress?: string;
    userAgent?: string;
    metadata?: any;
    createdAt: string;
}
