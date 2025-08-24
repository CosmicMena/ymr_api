import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto, ProductFilterDto } from './dto/product.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): Promise<{
        subcategory: {
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
        };
        brand: {
            id: string;
            name: string;
            description: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            logoUrl: string | null;
        };
    } & {
        id: string;
        code: string;
        name: string;
        model: string | null;
        description: string | null;
        features: string[];
        images: string[];
        specifications: import("@prisma/client/runtime/library").JsonValue | null;
        documents: import("@prisma/client/runtime/library").JsonValue | null;
        availability: string;
        price: import("@prisma/client/runtime/library").Decimal;
        stockQuantity: number;
        viewCount: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        subcategoryId: string | null;
        brandId: string | null;
    }>;
    findAll(paginationDto: PaginationDto, filterDto: ProductFilterDto): Promise<{
        data: unknown[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
            hasNext: boolean;
            hasPrev: boolean;
        };
    }>;
    getPopularProducts(limit?: number): Promise<({
        subcategory: {
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
        };
        brand: {
            id: string;
            name: string;
            description: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            logoUrl: string | null;
        };
    } & {
        id: string;
        code: string;
        name: string;
        model: string | null;
        description: string | null;
        features: string[];
        images: string[];
        specifications: import("@prisma/client/runtime/library").JsonValue | null;
        documents: import("@prisma/client/runtime/library").JsonValue | null;
        availability: string;
        price: import("@prisma/client/runtime/library").Decimal;
        stockQuantity: number;
        viewCount: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        subcategoryId: string | null;
        brandId: string | null;
    })[]>;
    getFeaturedProducts(limit?: number): Promise<({
        subcategory: {
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
        };
        brand: {
            id: string;
            name: string;
            description: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            logoUrl: string | null;
        };
    } & {
        id: string;
        code: string;
        name: string;
        model: string | null;
        description: string | null;
        features: string[];
        images: string[];
        specifications: import("@prisma/client/runtime/library").JsonValue | null;
        documents: import("@prisma/client/runtime/library").JsonValue | null;
        availability: string;
        price: import("@prisma/client/runtime/library").Decimal;
        stockQuantity: number;
        viewCount: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        subcategoryId: string | null;
        brandId: string | null;
    })[]>;
    findOne(id: string): Promise<{
        subcategory: {
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
        };
        brand: {
            id: string;
            name: string;
            description: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            logoUrl: string | null;
        };
        _count: {
            quoteItems: number;
            orderItems: number;
            userFavorites: number;
        };
    } & {
        id: string;
        code: string;
        name: string;
        model: string | null;
        description: string | null;
        features: string[];
        images: string[];
        specifications: import("@prisma/client/runtime/library").JsonValue | null;
        documents: import("@prisma/client/runtime/library").JsonValue | null;
        availability: string;
        price: import("@prisma/client/runtime/library").Decimal;
        stockQuantity: number;
        viewCount: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        subcategoryId: string | null;
        brandId: string | null;
    }>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<{
        subcategory: {
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
        };
        brand: {
            id: string;
            name: string;
            description: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            logoUrl: string | null;
        };
    } & {
        id: string;
        code: string;
        name: string;
        model: string | null;
        description: string | null;
        features: string[];
        images: string[];
        specifications: import("@prisma/client/runtime/library").JsonValue | null;
        documents: import("@prisma/client/runtime/library").JsonValue | null;
        availability: string;
        price: import("@prisma/client/runtime/library").Decimal;
        stockQuantity: number;
        viewCount: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        subcategoryId: string | null;
        brandId: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        code: string;
        name: string;
        model: string | null;
        description: string | null;
        features: string[];
        images: string[];
        specifications: import("@prisma/client/runtime/library").JsonValue | null;
        documents: import("@prisma/client/runtime/library").JsonValue | null;
        availability: string;
        price: import("@prisma/client/runtime/library").Decimal;
        stockQuantity: number;
        viewCount: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        subcategoryId: string | null;
        brandId: string | null;
    }>;
}
