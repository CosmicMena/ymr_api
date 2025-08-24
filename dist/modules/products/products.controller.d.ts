import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto, ProductFilterDto } from './dto/product.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): Promise<{
        brand: {
            name: string;
            description: string | null;
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            logoUrl: string | null;
        };
        subcategory: {
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
        };
    } & {
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        model: string | null;
        features: string[];
        images: string[];
        specifications: import("@prisma/client/runtime/library").JsonValue | null;
        documents: import("@prisma/client/runtime/library").JsonValue | null;
        availability: string;
        price: import("@prisma/client/runtime/library").Decimal;
        stockQuantity: number;
        subcategoryId: string | null;
        brandId: string | null;
        viewCount: number;
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
        brand: {
            name: string;
            description: string | null;
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            logoUrl: string | null;
        };
        subcategory: {
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
        };
    } & {
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        model: string | null;
        features: string[];
        images: string[];
        specifications: import("@prisma/client/runtime/library").JsonValue | null;
        documents: import("@prisma/client/runtime/library").JsonValue | null;
        availability: string;
        price: import("@prisma/client/runtime/library").Decimal;
        stockQuantity: number;
        subcategoryId: string | null;
        brandId: string | null;
        viewCount: number;
    })[]>;
    getFeaturedProducts(limit?: number): Promise<({
        brand: {
            name: string;
            description: string | null;
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            logoUrl: string | null;
        };
        subcategory: {
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
        };
    } & {
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        model: string | null;
        features: string[];
        images: string[];
        specifications: import("@prisma/client/runtime/library").JsonValue | null;
        documents: import("@prisma/client/runtime/library").JsonValue | null;
        availability: string;
        price: import("@prisma/client/runtime/library").Decimal;
        stockQuantity: number;
        subcategoryId: string | null;
        brandId: string | null;
        viewCount: number;
    })[]>;
    findOne(id: string): Promise<{
        brand: {
            name: string;
            description: string | null;
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            logoUrl: string | null;
        };
        subcategory: {
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
        };
        _count: {
            userFavorites: number;
            quoteItems: number;
            orderItems: number;
        };
    } & {
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        model: string | null;
        features: string[];
        images: string[];
        specifications: import("@prisma/client/runtime/library").JsonValue | null;
        documents: import("@prisma/client/runtime/library").JsonValue | null;
        availability: string;
        price: import("@prisma/client/runtime/library").Decimal;
        stockQuantity: number;
        subcategoryId: string | null;
        brandId: string | null;
        viewCount: number;
    }>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<{
        brand: {
            name: string;
            description: string | null;
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            logoUrl: string | null;
        };
        subcategory: {
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
        };
    } & {
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        model: string | null;
        features: string[];
        images: string[];
        specifications: import("@prisma/client/runtime/library").JsonValue | null;
        documents: import("@prisma/client/runtime/library").JsonValue | null;
        availability: string;
        price: import("@prisma/client/runtime/library").Decimal;
        stockQuantity: number;
        subcategoryId: string | null;
        brandId: string | null;
        viewCount: number;
    }>;
    remove(id: string): Promise<{
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        model: string | null;
        features: string[];
        images: string[];
        specifications: import("@prisma/client/runtime/library").JsonValue | null;
        documents: import("@prisma/client/runtime/library").JsonValue | null;
        availability: string;
        price: import("@prisma/client/runtime/library").Decimal;
        stockQuantity: number;
        subcategoryId: string | null;
        brandId: string | null;
        viewCount: number;
    }>;
}
