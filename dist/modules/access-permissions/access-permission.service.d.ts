import { PrismaService } from '../../common/prisma/prisma.service';
import { AccessPermissionDto } from './dto/access-permission.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { AccessPermissionFilterDto } from './dto/access-permission.dto';
export declare class AccessPermissionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Omit<AccessPermissionDto, 'id' | 'createdAt'>): Promise<{
        name: string;
        description: string | null;
        id: string;
        createdAt: Date;
        resource: string;
        action: string;
    }>;
    findAll(paginationDto: PaginationDto, filterDto: AccessPermissionFilterDto): Promise<{
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
    }>;
    findOne(id: string): Promise<{
        name: string;
        description: string | null;
        id: string;
        createdAt: Date;
        resource: string;
        action: string;
    }>;
    update(id: string, data: Partial<Omit<AccessPermissionDto, 'id' | 'createdAt'>>): Promise<{
        name: string;
        description: string | null;
        id: string;
        createdAt: Date;
        resource: string;
        action: string;
    }>;
    remove(id: string): Promise<{
        name: string;
        description: string | null;
        id: string;
        createdAt: Date;
        resource: string;
        action: string;
    }>;
}
