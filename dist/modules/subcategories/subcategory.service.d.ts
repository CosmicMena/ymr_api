import { PrismaService } from '../../common/prisma/prisma.service';
import { SubcategoryDto } from './dto/subcategory.dto';
export declare class SubcategoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Omit<SubcategoryDto, 'id'>): Promise<{
        id: string;
        name: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        imageUrl: string | null;
    }>;
    findAll(): Promise<({
        category: {
            id: string;
            name: string;
            description: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            imageUrl: string | null;
        };
    } & {
        id: string;
        name: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        imageUrl: string | null;
    })[]>;
    findOne(id: string): Promise<{
        category: {
            id: string;
            name: string;
            description: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            imageUrl: string | null;
        };
    } & {
        id: string;
        name: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        imageUrl: string | null;
    }>;
    update(id: string, data: Partial<Omit<SubcategoryDto, 'id'>>): Promise<{
        id: string;
        name: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        imageUrl: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        imageUrl: string | null;
    }>;
}
