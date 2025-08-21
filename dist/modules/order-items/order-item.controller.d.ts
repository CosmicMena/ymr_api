import { OrderItemService } from './order-item.service';
import { OrderItemDto } from './dto/order-item.dto';
export declare class OrderItemController {
    private readonly service;
    constructor(service: OrderItemService);
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
