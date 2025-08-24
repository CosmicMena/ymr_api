import { PrismaService } from '../../common/prisma/prisma.service';
import { QuoteRequestDto } from './dto/quote-request.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { QuoteRequestFilterDto } from './dto/quote-request.dto';
export declare class QuoteRequestService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Omit<QuoteRequestDto, 'id' | 'createdAt' | 'updatedAt'>): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        code: string;
        notes: string | null;
        statusId: string;
        totalItems: number;
        adminNotes: string | null;
        expiresAt: Date | null;
    }>;
    findAll(paginationDto: PaginationDto, filterDto: QuoteRequestFilterDto): Promise<{
        data: ({
            user: {
                name: string;
                email: string;
                phone: string | null;
                company: string | null;
                id: string;
                googleId: string | null;
                birthDate: Date | null;
                address: string | null;
                city: string | null;
                country: string;
                position: string | null;
                avatarUrl: string | null;
                passwordHash: string | null;
                emailVerified: boolean;
                isActive: boolean;
                preferredContactMethod: string;
                createdAt: Date;
                updatedAt: Date;
                lastLogin: Date | null;
            };
            status: {
                name: string;
                description: string | null;
                id: string;
                isActive: boolean;
                color: string | null;
            };
            quoteItems: {
                id: string;
                createdAt: Date;
                productId: string;
                quantity: number;
                unitPrice: import("@prisma/client/runtime/library").Decimal | null;
                totalPrice: import("@prisma/client/runtime/library").Decimal | null;
                notes: string | null;
                quoteRequestId: string;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            code: string;
            notes: string | null;
            statusId: string;
            totalItems: number;
            adminNotes: string | null;
            expiresAt: Date | null;
        })[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    findOne(id: string): Promise<{
        user: {
            name: string;
            email: string;
            phone: string | null;
            company: string | null;
            id: string;
            googleId: string | null;
            birthDate: Date | null;
            address: string | null;
            city: string | null;
            country: string;
            position: string | null;
            avatarUrl: string | null;
            passwordHash: string | null;
            emailVerified: boolean;
            isActive: boolean;
            preferredContactMethod: string;
            createdAt: Date;
            updatedAt: Date;
            lastLogin: Date | null;
        };
        status: {
            name: string;
            description: string | null;
            id: string;
            isActive: boolean;
            color: string | null;
        };
        quoteItems: {
            id: string;
            createdAt: Date;
            productId: string;
            quantity: number;
            unitPrice: import("@prisma/client/runtime/library").Decimal | null;
            totalPrice: import("@prisma/client/runtime/library").Decimal | null;
            notes: string | null;
            quoteRequestId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
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
        updatedAt: Date;
        userId: string;
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
        updatedAt: Date;
        userId: string;
        code: string;
        notes: string | null;
        statusId: string;
        totalItems: number;
        adminNotes: string | null;
        expiresAt: Date | null;
    }>;
}
