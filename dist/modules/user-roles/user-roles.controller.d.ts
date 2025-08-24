import { UserRolesService } from './user-roles.service';
import { UserRoleDto, UserRoleFilterDto } from './dto/user-role.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { SuccessResponseDto } from '../../common/dto/response.dto';
export declare class UserRolesController {
    private readonly service;
    constructor(service: UserRolesService);
    create(data: Omit<UserRoleDto, 'id'>): Promise<SuccessResponseDto<{
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        permissions: import("@prisma/client/runtime/library").JsonValue | null;
    }>>;
    findAll(pagination: PaginationDto, filter: UserRoleFilterDto): Promise<SuccessResponseDto<{
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
    }>>;
    findOne(id: string): Promise<SuccessResponseDto<{
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        permissions: import("@prisma/client/runtime/library").JsonValue | null;
    }>>;
    update(id: string, data: Partial<Omit<UserRoleDto, 'id'>>): Promise<SuccessResponseDto<{
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        permissions: import("@prisma/client/runtime/library").JsonValue | null;
    }>>;
    remove(id: string): Promise<SuccessResponseDto<any>>;
}
