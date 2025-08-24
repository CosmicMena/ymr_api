import { RolePermissionService } from './role-permission.service';
import { RolePermissionDto, RolePermissionFilterDto } from './dto/role-permission.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { SuccessResponseDto } from '../../common/dto/response.dto';
export declare class RolePermissionController {
    private readonly service;
    constructor(service: RolePermissionService);
    create(data: Omit<RolePermissionDto, 'grantedAt'>): Promise<SuccessResponseDto<{
        roleId: string;
        permissionId: string;
        grantedAt: Date;
    }>>;
    findAll(pagination: PaginationDto, filter: RolePermissionFilterDto): Promise<SuccessResponseDto<{
        data: ({
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
        })[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>>;
    findOne(roleId: string, permissionId: string): Promise<SuccessResponseDto<{
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
    }>>;
    remove(roleId: string, permissionId: string): Promise<SuccessResponseDto<any>>;
}
