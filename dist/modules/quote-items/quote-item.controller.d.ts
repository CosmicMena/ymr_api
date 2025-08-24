import { QuoteItemService } from './quote-item.service';
import { QuoteItemDto } from './dto/quote-item.dto';
export declare class QuoteItemController {
    private readonly service;
    constructor(service: QuoteItemService);
    create(data: Omit<QuoteItemDto, 'id' | 'createdAt'>): Promise<{
        id: string;
        createdAt: Date;
        quoteRequestId: string;
        productId: string;
        quantity: number;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
        totalPrice: import("@prisma/client/runtime/library").Decimal | null;
        notes: string | null;
    }>;
    findAll(): Promise<({
        quoteRequest: {
            id: string;
            createdAt: Date;
            notes: string | null;
            code: string;
            userId: string;
            statusId: string;
            totalItems: number;
            adminNotes: string | null;
            expiresAt: Date | null;
            updatedAt: Date;
        };
        product: {
            id: string;
            createdAt: Date;
            name: string;
            code: string;
            updatedAt: Date;
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
            subcategoryId: string | null;
            brandId: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        quoteRequestId: string;
        productId: string;
        quantity: number;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
        totalPrice: import("@prisma/client/runtime/library").Decimal | null;
        notes: string | null;
    })[]>;
    findOne(id: string): Promise<{
        quoteRequest: {
            id: string;
            createdAt: Date;
            notes: string | null;
            code: string;
            userId: string;
            statusId: string;
            totalItems: number;
            adminNotes: string | null;
            expiresAt: Date | null;
            updatedAt: Date;
        };
        product: {
            id: string;
            createdAt: Date;
            name: string;
            code: string;
            updatedAt: Date;
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
            subcategoryId: string | null;
            brandId: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        quoteRequestId: string;
        productId: string;
        quantity: number;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
        totalPrice: import("@prisma/client/runtime/library").Decimal | null;
        notes: string | null;
    }>;
    update(id: string, data: Partial<Omit<QuoteItemDto, 'id' | 'createdAt'>>): Promise<{
        id: string;
        createdAt: Date;
        quoteRequestId: string;
        productId: string;
        quantity: number;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
        totalPrice: import("@prisma/client/runtime/library").Decimal | null;
        notes: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        quoteRequestId: string;
        productId: string;
        quantity: number;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
        totalPrice: import("@prisma/client/runtime/library").Decimal | null;
        notes: string | null;
    }>;
}
