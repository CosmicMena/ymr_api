import { PrismaService } from '../../common/prisma/prisma.service';
import { SubcategoryDto } from './dto/subcategory.dto';
export declare class SubcategoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Omit<SubcategoryDto, 'id'>): Promise<{
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        imageUrl: string | null;
    }>;
    findAll(): Promise<({
        category: {
            name: string;
            description: string | null;
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            imageUrl: string | null;
        };
    } & {
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        imageUrl: string | null;
    })[]>;
    findOne(id: string): Promise<{
        category: {
            name: string;
            description: string | null;
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            imageUrl: string | null;
        };
    } & {
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        imageUrl: string | null;
    }>;
    update(id: string, data: Partial<Omit<SubcategoryDto, 'id'>>): Promise<{
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        imageUrl: string | null;
    }>;
    remove(id: string): Promise<{
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        imageUrl: string | null;
    }>;
}
