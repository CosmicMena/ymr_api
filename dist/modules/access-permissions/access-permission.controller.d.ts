import { AccessPermissionService } from './access-permission.service';
import { CreateAccessPermissionDto, UpdateAccessPermissionDto, AccessPermissionFilterDto } from './dto/access-permission.dto';
import { SuccessResponseDto } from '../../common/dto/response.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class AccessPermissionController {
    private readonly accessPermissionService;
    constructor(accessPermissionService: AccessPermissionService);
    create(data: CreateAccessPermissionDto): Promise<SuccessResponseDto<{
        name: string;
        description: string | null;
        id: string;
        createdAt: Date;
        resource: string;
        action: string;
    }>>;
    findAll(pagination: PaginationDto, filter: AccessPermissionFilterDto): Promise<SuccessResponseDto<{
        data: {
            name: string;
            description: string | null;
            id: string;
            createdAt: Date;
            resource: string;
            action: string;
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
        createdAt: Date;
        resource: string;
        action: string;
    }>>;
    update(id: string, data: UpdateAccessPermissionDto): Promise<SuccessResponseDto<{
        name: string;
        description: string | null;
        id: string;
        createdAt: Date;
        resource: string;
        action: string;
    }>>;
    remove(id: string): Promise<SuccessResponseDto<any>>;
}
