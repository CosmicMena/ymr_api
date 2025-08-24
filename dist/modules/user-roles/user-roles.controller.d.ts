import { UserRolesService } from './user-roles.service';
import { UserRoleDto } from './dto/user-role.dto';
export declare class UserRolesController {
    private readonly service;
    constructor(service: UserRolesService);
    create(data: Omit<UserRoleDto, 'id'>): Promise<{
        id: string;
        name: string;
        description: string | null;
        permissions: import("@prisma/client/runtime/library").JsonValue | null;
        isActive: boolean;
        createdAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        description: string | null;
        permissions: import("@prisma/client/runtime/library").JsonValue | null;
        isActive: boolean;
        createdAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        permissions: import("@prisma/client/runtime/library").JsonValue | null;
        isActive: boolean;
        createdAt: Date;
    }>;
    update(id: string, data: Partial<Omit<UserRoleDto, 'id'>>): Promise<{
        id: string;
        name: string;
        description: string | null;
        permissions: import("@prisma/client/runtime/library").JsonValue | null;
        isActive: boolean;
        createdAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        permissions: import("@prisma/client/runtime/library").JsonValue | null;
        isActive: boolean;
        createdAt: Date;
    }>;
}
