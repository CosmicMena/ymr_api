import { PrismaService } from '../../common/prisma/prisma.service';
import { CreateOrderDto, UpdateOrderDto, OrderFilterDto } from './dto/order.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class OrderService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createOrderDto: CreateOrderDto): Promise<{
        user: {
            name: string;
            email: string;
            phone: string;
            id: string;
        };
        status: {
            name: string;
            description: string;
            id: string;
        };
        _count: {
            orderItems: number;
        };
        orderItems: ({
            product: {
                name: string;
                id: string;
                code: string;
                price: import("@prisma/client/runtime/library").Decimal;
            };
        } & {
            id: string;
            createdAt: Date;
            productId: string | null;
            quantity: number;
            unitPrice: import("@prisma/client/runtime/library").Decimal | null;
            totalPrice: import("@prisma/client/runtime/library").Decimal | null;
            orderId: string;
            serviceDescription: string | null;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        code: string;
        notes: string | null;
        statusId: string;
        serviceType: string | null;
        totalAmount: import("@prisma/client/runtime/library").Decimal | null;
        currency: string;
        deliveryAddress: string | null;
        deliveryDate: Date | null;
    }>;
    findAll(paginationDto: PaginationDto, filterDto: OrderFilterDto): Promise<{
        data: ({
            user: {
                name: string;
                email: string;
                id: string;
            };
            status: {
                name: string;
                id: string;
            };
            _count: {
                orderItems: number;
            };
            orderItems: {
                id: string;
                quantity: number;
                unitPrice: import("@prisma/client/runtime/library").Decimal;
                totalPrice: import("@prisma/client/runtime/library").Decimal;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            code: string;
            notes: string | null;
            statusId: string;
            serviceType: string | null;
            totalAmount: import("@prisma/client/runtime/library").Decimal | null;
            currency: string;
            deliveryAddress: string | null;
            deliveryDate: Date | null;
        })[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    findActiveOrders(limit?: number): Promise<({
        user: {
            name: string;
            email: string;
            id: string;
        };
        status: {
            name: string;
            id: string;
        };
        _count: {
            orderItems: number;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        code: string;
        notes: string | null;
        statusId: string;
        serviceType: string | null;
        totalAmount: import("@prisma/client/runtime/library").Decimal | null;
        currency: string;
        deliveryAddress: string | null;
        deliveryDate: Date | null;
    })[]>;
    findUrgentOrders(limit?: number): Promise<({
        user: {
            name: string;
            email: string;
            phone: string;
            id: string;
        };
        status: {
            name: string;
            id: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        code: string;
        notes: string | null;
        statusId: string;
        serviceType: string | null;
        totalAmount: import("@prisma/client/runtime/library").Decimal | null;
        currency: string;
        deliveryAddress: string | null;
        deliveryDate: Date | null;
    })[]>;
    getOrderStats(): Promise<{
        totalOrders: number;
        ordersThisMonth: number;
        ordersByStatus: {};
        ordersByServiceType: {};
        totalRevenue: number | import("@prisma/client/runtime/library").Decimal;
        averageOrderValue: number | import("@prisma/client/runtime/library").Decimal;
    }>;
    findOne(id: string): Promise<{
        user: {
            name: string;
            email: string;
            phone: string;
            id: string;
            address: string;
            city: string;
            country: string;
        };
        status: {
            name: string;
            description: string;
            id: string;
        };
        _count: {
            orderItems: number;
        };
        orderItems: ({
            product: {
                brand: {
                    name: string;
                    id: string;
                };
                name: string;
                description: string;
                id: string;
                code: string;
                price: import("@prisma/client/runtime/library").Decimal;
            };
        } & {
            id: string;
            createdAt: Date;
            productId: string | null;
            quantity: number;
            unitPrice: import("@prisma/client/runtime/library").Decimal | null;
            totalPrice: import("@prisma/client/runtime/library").Decimal | null;
            orderId: string;
            serviceDescription: string | null;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        code: string;
        notes: string | null;
        statusId: string;
        serviceType: string | null;
        totalAmount: import("@prisma/client/runtime/library").Decimal | null;
        currency: string;
        deliveryAddress: string | null;
        deliveryDate: Date | null;
    }>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<{
        user: {
            name: string;
            email: string;
            id: string;
        };
        status: {
            name: string;
            id: string;
        };
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
        updatedAt: Date;
        userId: string;
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
        updatedAt: Date;
        userId: string;
        code: string;
        notes: string | null;
        statusId: string;
        serviceType: string | null;
        totalAmount: import("@prisma/client/runtime/library").Decimal | null;
        currency: string;
        deliveryAddress: string | null;
        deliveryDate: Date | null;
    }>;
    private generateUniqueOrderCode;
}
