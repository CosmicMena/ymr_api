import { OrderService } from './order.service';
import { CreateOrderDto, UpdateOrderDto, OrderFilterDto } from './dto/order.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(createOrderDto: CreateOrderDto): Promise<{
        user: {
            id: string;
            name: string;
            email: string;
            phone: string;
        };
        status: {
            id: string;
            name: string;
            description: string;
        };
        orderItems: ({
            product: {
                id: string;
                code: string;
                name: string;
                price: import("@prisma/client/runtime/library").Decimal;
            };
        } & {
            id: string;
            createdAt: Date;
            orderId: string;
            productId: string | null;
            serviceDescription: string | null;
            quantity: number;
            unitPrice: import("@prisma/client/runtime/library").Decimal | null;
            totalPrice: import("@prisma/client/runtime/library").Decimal | null;
        })[];
        _count: {
            orderItems: number;
        };
    } & {
        id: string;
        code: string;
        serviceType: string | null;
        totalAmount: import("@prisma/client/runtime/library").Decimal | null;
        currency: string;
        notes: string | null;
        deliveryAddress: string | null;
        deliveryDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        statusId: string;
    }>;
    findAll(paginationDto: PaginationDto, filterDto: OrderFilterDto): Promise<{
        data: ({
            user: {
                id: string;
                name: string;
                email: string;
            };
            status: {
                id: string;
                name: string;
            };
            orderItems: {
                id: string;
                quantity: number;
                unitPrice: import("@prisma/client/runtime/library").Decimal;
                totalPrice: import("@prisma/client/runtime/library").Decimal;
            }[];
            _count: {
                orderItems: number;
            };
        } & {
            id: string;
            code: string;
            serviceType: string | null;
            totalAmount: import("@prisma/client/runtime/library").Decimal | null;
            currency: string;
            notes: string | null;
            deliveryAddress: string | null;
            deliveryDate: Date | null;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            statusId: string;
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
            id: string;
            name: string;
            email: string;
        };
        status: {
            id: string;
            name: string;
        };
        _count: {
            orderItems: number;
        };
    } & {
        id: string;
        code: string;
        serviceType: string | null;
        totalAmount: import("@prisma/client/runtime/library").Decimal | null;
        currency: string;
        notes: string | null;
        deliveryAddress: string | null;
        deliveryDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        statusId: string;
    })[]>;
    findRecentOrders(limit?: number): Promise<({
        user: {
            id: string;
            name: string;
            email: string;
            phone: string;
        };
        status: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        code: string;
        serviceType: string | null;
        totalAmount: import("@prisma/client/runtime/library").Decimal | null;
        currency: string;
        notes: string | null;
        deliveryAddress: string | null;
        deliveryDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        statusId: string;
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
            id: string;
            name: string;
            email: string;
            phone: string;
            address: string;
            city: string;
            country: string;
        };
        status: {
            id: string;
            name: string;
            description: string;
        };
        orderItems: ({
            product: {
                id: string;
                code: string;
                name: string;
                description: string;
                price: import("@prisma/client/runtime/library").Decimal;
                brand: {
                    id: string;
                    name: string;
                };
            };
        } & {
            id: string;
            createdAt: Date;
            orderId: string;
            productId: string | null;
            serviceDescription: string | null;
            quantity: number;
            unitPrice: import("@prisma/client/runtime/library").Decimal | null;
            totalPrice: import("@prisma/client/runtime/library").Decimal | null;
        })[];
        _count: {
            orderItems: number;
        };
    } & {
        id: string;
        code: string;
        serviceType: string | null;
        totalAmount: import("@prisma/client/runtime/library").Decimal | null;
        currency: string;
        notes: string | null;
        deliveryAddress: string | null;
        deliveryDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        statusId: string;
    }>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<{
        user: {
            id: string;
            name: string;
            email: string;
        };
        status: {
            id: string;
            name: string;
        };
        orderItems: {
            id: string;
            createdAt: Date;
            orderId: string;
            productId: string | null;
            serviceDescription: string | null;
            quantity: number;
            unitPrice: import("@prisma/client/runtime/library").Decimal | null;
            totalPrice: import("@prisma/client/runtime/library").Decimal | null;
        }[];
    } & {
        id: string;
        code: string;
        serviceType: string | null;
        totalAmount: import("@prisma/client/runtime/library").Decimal | null;
        currency: string;
        notes: string | null;
        deliveryAddress: string | null;
        deliveryDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        statusId: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        code: string;
        serviceType: string | null;
        totalAmount: import("@prisma/client/runtime/library").Decimal | null;
        currency: string;
        notes: string | null;
        deliveryAddress: string | null;
        deliveryDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        statusId: string;
    }>;
}
