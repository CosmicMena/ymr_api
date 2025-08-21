import { QuoteRequestService } from './quote-request.service';
import { QuoteRequestDto } from './dto/quote-request.dto';
export declare class QuoteRequestController {
    private readonly service;
    constructor(service: QuoteRequestService);
    create(data: Omit<QuoteRequestDto, 'id' | 'createdAt' | 'updatedAt'>): Promise<{
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
    }>;
    findAll(): Promise<({
        status: {
            id: string;
            name: string;
            description: string | null;
            color: string | null;
            isActive: boolean;
        };
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
        quoteItems: {
            id: string;
            createdAt: Date;
            productId: string;
            quantity: number;
            quoteRequestId: string;
            unitPrice: import("@prisma/client/runtime/library").Decimal | null;
            totalPrice: import("@prisma/client/runtime/library").Decimal | null;
            notes: string | null;
        }[];
    } & {
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
    })[]>;
    findOne(id: string): Promise<{
        status: {
            id: string;
            name: string;
            description: string | null;
            color: string | null;
            isActive: boolean;
        };
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
        quoteItems: {
            id: string;
            createdAt: Date;
            productId: string;
            quantity: number;
            quoteRequestId: string;
            unitPrice: import("@prisma/client/runtime/library").Decimal | null;
            totalPrice: import("@prisma/client/runtime/library").Decimal | null;
            notes: string | null;
        }[];
    } & {
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
    }>;
    update(id: string, data: Partial<Omit<QuoteRequestDto, 'id' | 'createdAt' | 'updatedAt'>>): Promise<{
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
    }>;
    remove(id: string): Promise<{
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
    }>;
}
