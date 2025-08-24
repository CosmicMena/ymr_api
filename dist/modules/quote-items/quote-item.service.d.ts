import { PrismaService } from '../../common/prisma/prisma.service';
import { QuoteItemDto } from './dto/quote-item.dto';
export declare class QuoteItemService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Omit<QuoteItemDto, 'id' | 'createdAt'>): Promise<{
        id: string;
        createdAt: Date;
        notes: string | null;
        productId: string;
        quantity: number;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
        totalPrice: import("@prisma/client/runtime/library").Decimal | null;
        quoteRequestId: string;
    }>;
    findAll(): Promise<({
        product: {
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
        };
        quoteRequest: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            code: string;
            statusId: string;
            notes: string | null;
            totalItems: number;
            adminNotes: string | null;
            expiresAt: Date | null;
        };
    } & {
        id: string;
        createdAt: Date;
        notes: string | null;
        productId: string;
        quantity: number;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
        totalPrice: import("@prisma/client/runtime/library").Decimal | null;
        quoteRequestId: string;
    })[]>;
    findOne(id: string): Promise<{
        product: {
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
        };
        quoteRequest: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            code: string;
            statusId: string;
            notes: string | null;
            totalItems: number;
            adminNotes: string | null;
            expiresAt: Date | null;
        };
    } & {
        id: string;
        createdAt: Date;
        notes: string | null;
        productId: string;
        quantity: number;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
        totalPrice: import("@prisma/client/runtime/library").Decimal | null;
        quoteRequestId: string;
    }>;
    update(id: string, data: Partial<Omit<QuoteItemDto, 'id' | 'createdAt'>>): Promise<{
        id: string;
        createdAt: Date;
        notes: string | null;
        productId: string;
        quantity: number;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
        totalPrice: import("@prisma/client/runtime/library").Decimal | null;
        quoteRequestId: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        notes: string | null;
        productId: string;
        quantity: number;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
        totalPrice: import("@prisma/client/runtime/library").Decimal | null;
        quoteRequestId: string;
    }>;
}
