import { OrderItemService } from './order-item.service';
import { OrderItemDto } from './dto/order-item.dto';
export declare class OrderItemController {
    private readonly service;
    constructor(service: OrderItemService);
    create(data: Omit<OrderItemDto, 'id' | 'createdAt'>): Promise<{
        id: string;
        createdAt: Date;
        orderId: string;
        productId: string | null;
        serviceDescription: string | null;
        quantity: number;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
        totalPrice: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        orderId: string;
        productId: string | null;
        serviceDescription: string | null;
        quantity: number;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
        totalPrice: import("@prisma/client/runtime/library").Decimal | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        orderId: string;
        productId: string | null;
        serviceDescription: string | null;
        quantity: number;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
        totalPrice: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    update(id: string, data: Partial<Omit<OrderItemDto, 'id' | 'createdAt'>>): Promise<{
        id: string;
        createdAt: Date;
        orderId: string;
        productId: string | null;
        serviceDescription: string | null;
        quantity: number;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
        totalPrice: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        orderId: string;
        productId: string | null;
        serviceDescription: string | null;
        quantity: number;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
        totalPrice: import("@prisma/client/runtime/library").Decimal | null;
    }>;
}
