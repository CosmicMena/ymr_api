import { PrismaService } from '../../common/prisma/prisma.service';
import { MessageThreadDto } from './dto/message-thread.dto';
export declare class MessageThreadService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Omit<MessageThreadDto, 'id' | 'createdAt' | 'updatedAt'>): Promise<{
        status: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
        adminId: string | null;
        subject: string;
        priority: string;
    }>;
    findAll(): Promise<{
        status: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
        adminId: string | null;
        subject: string;
        priority: string;
    }[]>;
    findOne(id: string): Promise<{
        status: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
        adminId: string | null;
        subject: string;
        priority: string;
    }>;
    update(id: string, data: Partial<Omit<MessageThreadDto, 'id' | 'createdAt' | 'updatedAt'>>): Promise<{
        status: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
        adminId: string | null;
        subject: string;
        priority: string;
    }>;
    remove(id: string): Promise<{
        status: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
        adminId: string | null;
        subject: string;
        priority: string;
    }>;
}
