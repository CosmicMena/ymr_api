import { PrismaService } from '../../common/prisma/prisma.service';
import { RolePermissionDto } from './dto/role-permission.dto';
export declare class RolePermissionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Omit<RolePermissionDto, 'grantedAt'>): Promise<{
        grantedAt: Date;
        roleId: string;
        permissionId: string;
    }>;
    findAll(): Promise<({
        role: {
            id: string;
            name: string;
            description: string | null;
            isActive: boolean;
            createdAt: Date;
            permissions: import("@prisma/client/runtime/library").JsonValue | null;
        };
        permission: {
            id: string;
            name: string;
            description: string | null;
            createdAt: Date;
            action: string;
            resource: string;
        };
    } & {
        grantedAt: Date;
        roleId: string;
        permissionId: string;
    })[]>;
    findOne(roleId: string, permissionId: string): Promise<{
        role: {
            id: string;
            name: string;
            description: string | null;
            isActive: boolean;
            createdAt: Date;
            permissions: import("@prisma/client/runtime/library").JsonValue | null;
        };
        permission: {
            id: string;
            name: string;
            description: string | null;
            createdAt: Date;
            action: string;
            resource: string;
        };
    } & {
        grantedAt: Date;
        roleId: string;
        permissionId: string;
    }>;
    remove(roleId: string, permissionId: string): Promise<{
        grantedAt: Date;
        roleId: string;
        permissionId: string;
    }>;
}
