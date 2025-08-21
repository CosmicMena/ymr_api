import { RolePermissionService } from './role-permission.service';
import { RolePermissionDto } from './dto/role-permission.dto';
export declare class RolePermissionController {
    private readonly service;
    constructor(service: RolePermissionService);
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
