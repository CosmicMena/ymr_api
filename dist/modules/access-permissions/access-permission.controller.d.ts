import { AccessPermissionService } from './access-permission.service';
import { CreateAccessPermissionDto, UpdateAccessPermissionDto } from './dto/access-permission.dto';
import { SuccessResponseDto } from '../../common/dto/response.dto';
export declare class AccessPermissionController {
    private readonly accessPermissionService;
    constructor(accessPermissionService: AccessPermissionService);
    create(data: CreateAccessPermissionDto): Promise<SuccessResponseDto<{
        id: string;
        createdAt: Date;
        name: string;
        resource: string;
        action: string;
        description: string | null;
    }>>;
    findAll(): Promise<SuccessResponseDto<{
        id: string;
        createdAt: Date;
        name: string;
        resource: string;
        action: string;
        description: string | null;
    }[]>>;
    findOne(id: string): Promise<SuccessResponseDto<{
        id: string;
        createdAt: Date;
        name: string;
        resource: string;
        action: string;
        description: string | null;
    }>>;
    update(id: string, data: UpdateAccessPermissionDto): Promise<SuccessResponseDto<{
        id: string;
        createdAt: Date;
        name: string;
        resource: string;
        action: string;
        description: string | null;
    }>>;
    remove(id: string): Promise<SuccessResponseDto<any>>;
}
