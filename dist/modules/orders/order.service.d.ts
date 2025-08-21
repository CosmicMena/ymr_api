import { PrismaService } from '../../common/prisma/prisma.service';
import { OrderDto } from './dto/order.dto';
export declare class OrderService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Omit<OrderDto, 'id' | 'createdAt' | 'updatedAt'>): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        updatedAt: Date;
        code: string;
        notes: string | null;
        statusId: string;
        serviceType: string | null;
        totalAmount: import("@prisma/client/runtime/library").Decimal | null;
        currency: string;
        deliveryAddress: string | null;
        deliveryDate: Date | null;
    }>;
    findAll(): Promise<({
        orderItems: {
            id: string;
            createdAt: Date;
            productId: string | null;
            quantity: number;
            unitPrice: import("@prisma/client/runtime/library").Decimal | null;
            totalPrice: import("@prisma/client/runtime/library").Decimal | null;
            orderId: string;
            serviceDescription: string | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        userId: string;
        updatedAt: Date;
        code: string;
        notes: string | null;
        statusId: string;
        serviceType: string | null;
        totalAmount: import("@prisma/client/runtime/library").Decimal | null;
        currency: string;
        deliveryAddress: string | null;
        deliveryDate: Date | null;
    })[]>;
    findOne(id: string): Promise<{
        orderItems: {
            id: string;
            createdAt: Date;
            productId: string | null;
            quantity: number;
            unitPrice: import("@prisma/client/runtime/library").Decimal | null;
            totalPrice: import("@prisma/client/runtime/library").Decimal | null;
            orderId: string;
            serviceDescription: string | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        userId: string;
        updatedAt: Date;
        code: string;
        notes: string | null;
        statusId: string;
        serviceType: string | null;
        totalAmount: import("@prisma/client/runtime/library").Decimal | null;
        currency: string;
        deliveryAddress: string | null;
        deliveryDate: Date | null;
    }>;
    update(id: string, data: Partial<Omit<OrderDto, 'id' | 'createdAt' | 'updatedAt'>>): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        updatedAt: Date;
        code: string;
        notes: string | null;
        statusId: string;
        serviceType: string | null;
        totalAmount: import("@prisma/client/runtime/library").Decimal | null;
        currency: string;
        deliveryAddress: string | null;
        deliveryDate: Date | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        updatedAt: Date;
        code: string;
        notes: string | null;
        statusId: string;
        serviceType: string | null;
        totalAmount: import("@prisma/client/runtime/library").Decimal | null;
        currency: string;
        deliveryAddress: string | null;
        deliveryDate: Date | null;
    }>;
}
