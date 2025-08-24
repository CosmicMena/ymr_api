import { QuoteRequestService } from './quote-request.service';
import { QuoteRequestDto } from './dto/quote-request.dto';
export declare class QuoteRequestController {
    private readonly service;
    constructor(service: QuoteRequestService);
    create(data: Omit<QuoteRequestDto, 'id' | 'createdAt' | 'updatedAt'>): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        userId: string;
        statusId: string;
        totalItems: number;
        notes: string | null;
        adminNotes: string | null;
        expiresAt: Date | null;
    }>;
    findAll(): Promise<({
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
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
        status: {
            id: string;
            name: string;
            isActive: boolean;
            description: string | null;
            color: string | null;
        };
        quoteItems: {
            id: string;
            createdAt: Date;
            notes: string | null;
            quoteRequestId: string;
            productId: string;
            quantity: number;
            unitPrice: import("@prisma/client/runtime/library").Decimal | null;
            totalPrice: import("@prisma/client/runtime/library").Decimal | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        userId: string;
        statusId: string;
        totalItems: number;
        notes: string | null;
        adminNotes: string | null;
        expiresAt: Date | null;
    })[]>;
    findOne(id: string): Promise<{
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
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
        status: {
            id: string;
            name: string;
            isActive: boolean;
            description: string | null;
            color: string | null;
        };
        quoteItems: {
            id: string;
            createdAt: Date;
            notes: string | null;
            quoteRequestId: string;
            productId: string;
            quantity: number;
            unitPrice: import("@prisma/client/runtime/library").Decimal | null;
            totalPrice: import("@prisma/client/runtime/library").Decimal | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        userId: string;
        statusId: string;
        totalItems: number;
        notes: string | null;
        adminNotes: string | null;
        expiresAt: Date | null;
    }>;
    update(id: string, data: Partial<Omit<QuoteRequestDto, 'id' | 'createdAt' | 'updatedAt'>>): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        userId: string;
        statusId: string;
        totalItems: number;
        notes: string | null;
        adminNotes: string | null;
        expiresAt: Date | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        userId: string;
        statusId: string;
        totalItems: number;
        notes: string | null;
        adminNotes: string | null;
        expiresAt: Date | null;
    }>;
}
