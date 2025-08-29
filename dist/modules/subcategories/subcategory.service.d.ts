import { PrismaService } from '../../common/prisma/prisma.service';
import { SubcategoryDto } from './dto/subcategory.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { SubcategoryFilterDto } from './dto/subcategory.dto';
export declare class SubcategoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Omit<SubcategoryDto, 'id'>): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        categoryId: string;
        isActive: boolean;
    }>;
    findAll(paginationDto: PaginationDto, filterDto: SubcategoryFilterDto): Promise<{
        data: ({
            category: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                isActive: boolean;
                imageUrl: string | null;
                description: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            categoryId: string;
            isActive: boolean;
        })[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    findOne(id: string): Promise<{
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            isActive: boolean;
            imageUrl: string | null;
            description: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        categoryId: string;
        isActive: boolean;
    }>;
    update(id: string, data: Partial<Omit<SubcategoryDto, 'id'>>): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        categoryId: string;
        isActive: boolean;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        categoryId: string;
        isActive: boolean;
    }>;
}
