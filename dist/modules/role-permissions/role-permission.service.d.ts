import { PrismaService } from '../../common/prisma/prisma.service';
import { RolePermissionDto } from './dto/role-permission.dto';
export declare class RolePermissionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Omit<RolePermissionDto, 'grantedAt'>): Promise<{
        roleId: string;
        permissionId: string;
        grantedAt: Date;
    }>;
    findAll(): Promise<({
        role: {
            name: string;
            description: string | null;
            id: string;
            isActive: boolean;
            createdAt: Date;
            permissions: import("@prisma/client/runtime/library").JsonValue | null;
        };
        permission: {
            name: string;
            description: string | null;
            id: string;
            createdAt: Date;
            resource: string;
            action: string;
        };
    } & {
        roleId: string;
        permissionId: string;
        grantedAt: Date;
    })[]>;
    findOne(roleId: string, permissionId: string): Promise<{
        role: {
            name: string;
            description: string | null;
            id: string;
            isActive: boolean;
            createdAt: Date;
            permissions: import("@prisma/client/runtime/library").JsonValue | null;
        };
        permission: {
            name: string;
            description: string | null;
            id: string;
            createdAt: Date;
            resource: string;
            action: string;
        };
    } & {
        roleId: string;
        permissionId: string;
        grantedAt: Date;
    }>;
    remove(roleId: string, permissionId: string): Promise<{
        roleId: string;
        permissionId: string;
        grantedAt: Date;
    }>;
}
