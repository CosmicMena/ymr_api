import { CategoryService } from './category.service';
import { CreateCategoryDto, UpdateCategoryDto, CategoryFilterDto } from './dto/category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto): Promise<{
        _count: {
            subcategories: number;
        };
        subcategories: {
            name: string;
            description: string | null;
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            categoryId: string;
            imageUrl: string | null;
        }[];
    } & {
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string | null;
    }>;
    findAll(filterDto: CategoryFilterDto): Promise<{
        name: string;
        description: string;
        id: string;
        isActive: boolean;
        _count: {
            subcategories: number;
        };
        imageUrl: string;
    }[]>;
    findActiveCategories(): Promise<{
        name: string;
        description: string;
        id: string;
        isActive: boolean;
        _count: {
            subcategories: number;
        };
        imageUrl: string;
    }[]>;
    findOne(id: string): Promise<{
        _count: {
            subcategories: number;
        };
        subcategories: {
            name: string;
            description: string;
            id: string;
            isActive: boolean;
        }[];
    } & {
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string | null;
    }>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<{
        _count: {
            subcategories: number;
        };
        subcategories: {
            name: string;
            description: string | null;
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            categoryId: string;
            imageUrl: string | null;
        }[];
    } & {
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string | null;
    }>;
    remove(id: string): Promise<{
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string | null;
    }>;
}
