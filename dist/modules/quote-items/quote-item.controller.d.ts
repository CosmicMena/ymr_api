import { QuoteItemService } from './quote-item.service';
import { QuoteItemDto } from './dto/quote-item.dto';
export declare class QuoteItemController {
    private readonly service;
    constructor(service: QuoteItemService);
    create(data: Omit<QuoteItemDto, 'id' | 'createdAt'>): Promise<{
        id: string;
        createdAt: Date;
        productId: string;
        quantity: number;
        quoteRequestId: string;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
        totalPrice: import("@prisma/client/runtime/library").Decimal | null;
        notes: string | null;
    }>;
    findAll(): Promise<({
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
        quoteRequest: {
            id: string;
            createdAt: Date;
            userId: string;
            updatedAt: Date;
            code: string;
            notes: string | null;
            statusId: string;
            totalItems: number;
            adminNotes: string | null;
            expiresAt: Date | null;
        };
    } & {
        id: string;
        createdAt: Date;
        productId: string;
        quantity: number;
        quoteRequestId: string;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
        totalPrice: import("@prisma/client/runtime/library").Decimal | null;
        notes: string | null;
    })[]>;
    findOne(id: string): Promise<{
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
        quoteRequest: {
            id: string;
            createdAt: Date;
            userId: string;
            updatedAt: Date;
            code: string;
            notes: string | null;
            statusId: string;
            totalItems: number;
            adminNotes: string | null;
            expiresAt: Date | null;
        };
    } & {
        id: string;
        createdAt: Date;
        productId: string;
        quantity: number;
        quoteRequestId: string;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
        totalPrice: import("@prisma/client/runtime/library").Decimal | null;
        notes: string | null;
    }>;
    update(id: string, data: Partial<Omit<QuoteItemDto, 'id' | 'createdAt'>>): Promise<{
        id: string;
        createdAt: Date;
        productId: string;
        quantity: number;
        quoteRequestId: string;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
        totalPrice: import("@prisma/client/runtime/library").Decimal | null;
        notes: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        productId: string;
        quantity: number;
        quoteRequestId: string;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
        totalPrice: import("@prisma/client/runtime/library").Decimal | null;
        notes: string | null;
    }>;
}
