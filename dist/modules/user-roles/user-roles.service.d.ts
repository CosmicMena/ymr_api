import { PrismaService } from '../../common/prisma/prisma.service';
import { UserRoleDto } from './dto/user-role.dto';
export declare class UserRolesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Omit<UserRoleDto, 'id'>): Promise<{
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        permissions: import("@prisma/client/runtime/library").JsonValue | null;
    }>;
    findAll(): Promise<{
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        permissions: import("@prisma/client/runtime/library").JsonValue | null;
    }[]>;
    findOne(id: string): Promise<{
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        permissions: import("@prisma/client/runtime/library").JsonValue | null;
    }>;
    update(id: string, data: Partial<Omit<UserRoleDto, 'id'>>): Promise<{
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        permissions: import("@prisma/client/runtime/library").JsonValue | null;
    }>;
    remove(id: string): Promise<{
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        permissions: import("@prisma/client/runtime/library").JsonValue | null;
    }>;
}
