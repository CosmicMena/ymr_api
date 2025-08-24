import { StatusService } from './status.service';
import { StatusDto, StatusFilterDto } from './dto/status.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { SuccessResponseDto } from '../../common/dto/response.dto';
export declare class StatusController {
    private readonly service;
    constructor(service: StatusService);
    create(data: Omit<StatusDto, 'id'>): Promise<SuccessResponseDto<{
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        color: string | null;
    }>>;
    findAll(pagination: PaginationDto, filter: StatusFilterDto): Promise<SuccessResponseDto<{
        data: {
            name: string;
            description: string | null;
            id: string;
            isActive: boolean;
            color: string | null;
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
        color: string | null;
    }>>;
    update(id: string, data: Partial<Omit<StatusDto, 'id'>>): Promise<SuccessResponseDto<{
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        color: string | null;
    }>>;
    remove(id: string): Promise<SuccessResponseDto<any>>;
}
