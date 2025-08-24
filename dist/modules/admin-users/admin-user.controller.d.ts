import { AdminUserService } from './admin-user.service';
import { AdminUserDto, AdminUserFilterDto } from './dto/admin-user.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { SuccessResponseDto } from '../../common/dto/response.dto';
export declare class AdminUserController {
    private readonly adminUserService;
    constructor(adminUserService: AdminUserService);
    create(data: Omit<AdminUserDto, 'id' | 'createdAt' | 'updatedAt'>): Promise<SuccessResponseDto<{
        name: string;
        email: string;
        id: string;
        avatarUrl: string | null;
        passwordHash: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        lastLogin: Date | null;
        roleId: string;
        createdBy: string | null;
    }>>;
    findAll(pagination: PaginationDto, filter: AdminUserFilterDto): Promise<SuccessResponseDto<{
        data: {
            name: string;
            email: string;
            id: string;
            avatarUrl: string | null;
            passwordHash: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            lastLogin: Date | null;
            roleId: string;
            createdBy: string | null;
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
        email: string;
        id: string;
        avatarUrl: string | null;
        passwordHash: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        lastLogin: Date | null;
        roleId: string;
        createdBy: string | null;
    }>>;
    update(id: string, data: Partial<Omit<AdminUserDto, 'id' | 'createdAt' | 'updatedAt'>>): Promise<SuccessResponseDto<{
        name: string;
        email: string;
        id: string;
        avatarUrl: string | null;
        passwordHash: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        lastLogin: Date | null;
        roleId: string;
        createdBy: string | null;
    }>>;
    remove(id: string): Promise<SuccessResponseDto<any>>;
}
