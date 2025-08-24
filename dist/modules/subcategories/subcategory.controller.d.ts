import { SubcategoryService } from './subcategory.service';
import { SubcategoryDto } from './dto/subcategory.dto';
export declare class SubcategoryController {
    private readonly service;
    constructor(service: SubcategoryService);
    create(data: Omit<SubcategoryDto, 'id'>): Promise<{
        id: string;
        name: string;
        categoryId: string;
        imageUrl: string | null;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        category: {
            id: string;
            name: string;
            imageUrl: string | null;
            description: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        name: string;
        categoryId: string;
        imageUrl: string | null;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        category: {
            id: string;
            name: string;
            imageUrl: string | null;
            description: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        name: string;
        categoryId: string;
        imageUrl: string | null;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, data: Partial<Omit<SubcategoryDto, 'id'>>): Promise<{
        id: string;
        name: string;
        categoryId: string;
        imageUrl: string | null;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        categoryId: string;
        imageUrl: string | null;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
