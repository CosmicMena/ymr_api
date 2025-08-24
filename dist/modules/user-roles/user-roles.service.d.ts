import { PrismaService } from '../../common/prisma/prisma.service';
import { UserRoleDto } from './dto/user-role.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { UserRoleFilterDto } from './dto/user-role.dto';
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
    findAll(paginationDto: PaginationDto, filterDto: UserRoleFilterDto): Promise<{
        data: {
            name: string;
            description: string | null;
            id: string;
            isActive: boolean;
            createdAt: Date;
            permissions: import("@prisma/client/runtime/library").JsonValue | null;
        }[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
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
