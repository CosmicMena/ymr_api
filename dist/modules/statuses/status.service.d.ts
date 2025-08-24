import { PrismaService } from '../../common/prisma/prisma.service';
import { StatusDto } from './dto/status.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { StatusFilterDto } from './dto/status.dto';
export declare class StatusService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Omit<StatusDto, 'id'>): Promise<{
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        color: string | null;
    }>;
    findAll(paginationDto: PaginationDto, filterDto: StatusFilterDto): Promise<{
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
    }>;
    findOne(id: string): Promise<{
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        color: string | null;
    }>;
    update(id: string, data: Partial<Omit<StatusDto, 'id'>>): Promise<{
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        color: string | null;
    }>;
    remove(id: string): Promise<{
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        color: string | null;
    }>;
}
