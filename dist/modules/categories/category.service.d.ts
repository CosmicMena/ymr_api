import { PrismaService } from '../../common/prisma/prisma.service';
import { CreateCategoryDto, UpdateCategoryDto, CategoryFilterDto } from './dto/category.dto';
export declare class CategoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateCategoryDto): Promise<{
        subcategories: {
            id: string;
            name: string;
            imageUrl: string | null;
            description: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            categoryId: string;
        }[];
        _count: {
            subcategories: number;
        };
    } & {
        id: string;
        name: string;
        imageUrl: string | null;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(filterDto?: CategoryFilterDto): Promise<({
        subcategories: {
            id: string;
            name: string;
            isActive: boolean;
        }[];
        _count: {
            subcategories: number;
        };
    } & {
        id: string;
        name: string;
        imageUrl: string | null;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findActiveCategories(): Promise<{
        id: string;
        name: string;
        imageUrl: string;
        description: string;
        isActive: boolean;
        _count: {
            subcategories: number;
        };
    }[]>;
    findOne(id: string): Promise<{
        subcategories: {
            id: string;
            name: string;
            description: string;
            isActive: boolean;
        }[];
        _count: {
            subcategories: number;
        };
    } & {
        id: string;
        name: string;
        imageUrl: string | null;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, data: UpdateCategoryDto): Promise<{
        subcategories: {
            id: string;
            name: string;
            imageUrl: string | null;
            description: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            categoryId: string;
        }[];
        _count: {
            subcategories: number;
        };
    } & {
        id: string;
        name: string;
        imageUrl: string | null;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        imageUrl: string | null;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
