import { PrismaService } from '../../common/prisma/prisma.service';
import { ShoppingCartDto } from './dto/shopping-cart.dto';
export declare class ShoppingCartService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Omit<ShoppingCartDto, 'createdAt' | 'updatedAt'>): Promise<{
        id: string;
        createdAt: Date;
        userId: string | null;
        sessionId: string | null;
        updatedAt: Date;
        productId: string;
        quantity: number;
    }>;
    findAll(): Promise<({
        user: {
            id: string;
            name: string;
            isActive: boolean;
            createdAt: Date;
            country: string;
            city: string | null;
            email: string;
            phone: string | null;
            birthDate: Date | null;
            address: string | null;
            company: string | null;
            position: string | null;
            avatarUrl: string | null;
            passwordHash: string | null;
            googleId: string | null;
            emailVerified: boolean;
            preferredContactMethod: string;
            updatedAt: Date;
            lastLogin: Date | null;
        };
        product: {
            id: string;
            name: string;
            description: string | null;
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
            viewCount: number;
            subcategoryId: string | null;
            brandId: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        userId: string | null;
        sessionId: string | null;
        updatedAt: Date;
        productId: string;
        quantity: number;
    })[]>;
    findOne(id: string): Promise<{
        user: {
            id: string;
            name: string;
            isActive: boolean;
            createdAt: Date;
            country: string;
            city: string | null;
            email: string;
            phone: string | null;
            birthDate: Date | null;
            address: string | null;
            company: string | null;
            position: string | null;
            avatarUrl: string | null;
            passwordHash: string | null;
            googleId: string | null;
            emailVerified: boolean;
            preferredContactMethod: string;
            updatedAt: Date;
            lastLogin: Date | null;
        };
        product: {
            id: string;
            name: string;
            description: string | null;
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
            viewCount: number;
            subcategoryId: string | null;
            brandId: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        userId: string | null;
        sessionId: string | null;
        updatedAt: Date;
        productId: string;
        quantity: number;
    }>;
    update(id: string, data: Partial<Omit<ShoppingCartDto, 'id' | 'createdAt' | 'updatedAt'>>): Promise<{
        id: string;
        createdAt: Date;
        userId: string | null;
        sessionId: string | null;
        updatedAt: Date;
        productId: string;
        quantity: number;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string | null;
        sessionId: string | null;
        updatedAt: Date;
        productId: string;
        quantity: number;
    }>;
}
