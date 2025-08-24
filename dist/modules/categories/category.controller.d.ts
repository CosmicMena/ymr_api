import { CategoryService } from './category.service';
import { CreateCategoryDto, UpdateCategoryDto, CategoryFilterDto } from './dto/category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto): Promise<{
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
    findAll(filterDto: CategoryFilterDto): Promise<{
        id: string;
        name: string;
        imageUrl: string;
        description: string;
        isActive: boolean;
        _count: {
            subcategories: number;
        };
    }[]>;
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
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<{
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
