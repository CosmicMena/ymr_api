import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCartDto, ShoppingCartFilterDto } from './dto/shopping-cart.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { SuccessResponseDto } from '../../common/dto/response.dto';
export declare class ShoppingCartController {
    private readonly service;
    constructor(service: ShoppingCartService);
    create(data: Omit<ShoppingCartDto, 'createdAt' | 'updatedAt'>): Promise<SuccessResponseDto<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
        productId: string;
        quantity: number;
        sessionId: string | null;
    }>>;
    findAll(pagination: PaginationDto, filter: ShoppingCartFilterDto): Promise<SuccessResponseDto<{
        data: ({
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
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            productId: string;
            quantity: number;
            sessionId: string | null;
        })[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>>;
    findOne(id: string): Promise<SuccessResponseDto<{
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
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
        productId: string;
        quantity: number;
        sessionId: string | null;
    }>>;
    update(id: string, data: Partial<Omit<ShoppingCartDto, 'id' | 'createdAt' | 'updatedAt'>>): Promise<SuccessResponseDto<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
        productId: string;
        quantity: number;
        sessionId: string | null;
    }>>;
    remove(id: string): Promise<SuccessResponseDto<any>>;
}
