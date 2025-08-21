import { MessageThreadService } from './message-thread.service';
import { MessageThreadDto } from './dto/message-thread.dto';
export declare class MessageThreadController {
    private readonly service;
    constructor(service: MessageThreadService);
    create(data: Omit<MessageThreadDto, 'id' | 'createdAt' | 'updatedAt'>): Promise<{
        id: string;
        status: string;
        createdAt: Date;
        userId: string | null;
        adminId: string | null;
        updatedAt: Date;
        subject: string;
        priority: string;
    }>;
    findAll(): Promise<{
        id: string;
        status: string;
        createdAt: Date;
        userId: string | null;
        adminId: string | null;
        updatedAt: Date;
        subject: string;
        priority: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        status: string;
        createdAt: Date;
        userId: string | null;
        adminId: string | null;
        updatedAt: Date;
        subject: string;
        priority: string;
    }>;
    update(id: string, data: Partial<Omit<MessageThreadDto, 'id' | 'createdAt' | 'updatedAt'>>): Promise<{
        id: string;
        status: string;
        createdAt: Date;
        userId: string | null;
        adminId: string | null;
        updatedAt: Date;
        subject: string;
        priority: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        status: string;
        createdAt: Date;
        userId: string | null;
        adminId: string | null;
        updatedAt: Date;
        subject: string;
        priority: string;
    }>;
}
