import { PrismaService } from '../../common/prisma/prisma.service';
import { CategoryDto } from './dto/category.dto';
export declare class CategoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Omit<CategoryDto, 'id' | 'createdAt' | 'updatedAt'>): Promise<{
        id: string;
        name: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string | null;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string | null;
    }>;
    update(id: string, data: Partial<Omit<CategoryDto, 'id' | 'createdAt' | 'updatedAt'>>): Promise<{
        id: string;
        name: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string | null;
    }>;
}
