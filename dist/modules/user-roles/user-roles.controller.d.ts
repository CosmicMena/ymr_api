import { UserRolesService } from './user-roles.service';
import { UserRoleDto } from './dto/user-role.dto';
export declare class UserRolesController {
    private readonly service;
    constructor(service: UserRolesService);
    create(data: Omit<UserRoleDto, 'id'>): Promise<{
        id: string;
        name: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        permissions: import("@prisma/client/runtime/library").JsonValue | null;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        permissions: import("@prisma/client/runtime/library").JsonValue | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        permissions: import("@prisma/client/runtime/library").JsonValue | null;
    }>;
    update(id: string, data: Partial<Omit<UserRoleDto, 'id'>>): Promise<{
        id: string;
        name: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        permissions: import("@prisma/client/runtime/library").JsonValue | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        permissions: import("@prisma/client/runtime/library").JsonValue | null;
    }>;
}
