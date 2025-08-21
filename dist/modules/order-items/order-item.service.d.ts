import { PrismaService } from '../../common/prisma/prisma.service';
import { OrderItemDto } from './dto/order-item.dto';
export declare class OrderItemService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Omit<OrderItemDto, 'id' | 'createdAt'>): Promise<{
        id: string;
        createdAt: Date;
        productId: string | null;
        quantity: number;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
        totalPrice: import("@prisma/client/runtime/library").Decimal | null;
        orderId: string;
        serviceDescription: string | null;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        productId: string | null;
        quantity: number;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
        totalPrice: import("@prisma/client/runtime/library").Decimal | null;
        orderId: string;
        serviceDescription: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        productId: string | null;
        quantity: number;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
        totalPrice: import("@prisma/client/runtime/library").Decimal | null;
        orderId: string;
        serviceDescription: string | null;
    }>;
    update(id: string, data: Partial<Omit<OrderItemDto, 'id' | 'createdAt'>>): Promise<{
        id: string;
        createdAt: Date;
        productId: string | null;
        quantity: number;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
        totalPrice: import("@prisma/client/runtime/library").Decimal | null;
        orderId: string;
        serviceDescription: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        productId: string | null;
        quantity: number;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
        totalPrice: import("@prisma/client/runtime/library").Decimal | null;
        orderId: string;
        serviceDescription: string | null;
    }>;
}
