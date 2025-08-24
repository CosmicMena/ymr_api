import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCartDto } from './dto/shopping-cart.dto';
export declare class ShoppingCartController {
    private readonly service;
    constructor(service: ShoppingCartService);
    create(data: Omit<ShoppingCartDto, 'createdAt' | 'updatedAt'>): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: string;
        userId: string | null;
        sessionId: string | null;
        productId: string;
        quantity: number;
    }>;
    findAll(): Promise<({
        user: {
            createdAt: Date;
            updatedAt: Date;
            id: string;
            name: string;
            email: string;
            phone: string | null;
            birthDate: Date | null;
            address: string | null;
            city: string | null;
            country: string;
            company: string | null;
            position: string | null;
            avatarUrl: string | null;
            passwordHash: string | null;
            googleId: string | null;
            emailVerified: boolean;
            isActive: boolean;
            preferredContactMethod: string;
            lastLogin: Date | null;
        };
        product: {
            createdAt: Date;
            updatedAt: Date;
            id: string;
            name: string;
            isActive: boolean;
            code: string;
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
            subcategoryId: string | null;
            brandId: string | null;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: string;
        userId: string | null;
        sessionId: string | null;
        productId: string;
        quantity: number;
    })[]>;
    findOne(id: string): Promise<{
        user: {
            createdAt: Date;
            updatedAt: Date;
            id: string;
            name: string;
            email: string;
            phone: string | null;
            birthDate: Date | null;
            address: string | null;
            city: string | null;
            country: string;
            company: string | null;
            position: string | null;
            avatarUrl: string | null;
            passwordHash: string | null;
            googleId: string | null;
            emailVerified: boolean;
            isActive: boolean;
            preferredContactMethod: string;
            lastLogin: Date | null;
        };
        product: {
            createdAt: Date;
            updatedAt: Date;
            id: string;
            name: string;
            isActive: boolean;
            code: string;
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
            subcategoryId: string | null;
            brandId: string | null;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: string;
        userId: string | null;
        sessionId: string | null;
        productId: string;
        quantity: number;
    }>;
    update(id: string, data: Partial<Omit<ShoppingCartDto, 'id' | 'createdAt' | 'updatedAt'>>): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: string;
        userId: string | null;
        sessionId: string | null;
        productId: string;
        quantity: number;
    }>;
    remove(id: string): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: string;
        userId: string | null;
        sessionId: string | null;
        productId: string;
        quantity: number;
    }>;
}
