import { MessageThreadService } from './message-thread.service';
import { MessageThreadDto } from './dto/message-thread.dto';
export declare class MessageThreadController {
    private readonly service;
    constructor(service: MessageThreadService);
    create(data: Omit<MessageThreadDto, 'id' | 'createdAt' | 'updatedAt'>): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        subject: string;
        userId: string | null;
        adminId: string | null;
        status: string;
        priority: string;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        subject: string;
        userId: string | null;
        adminId: string | null;
        status: string;
        priority: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        subject: string;
        userId: string | null;
        adminId: string | null;
        status: string;
        priority: string;
    }>;
    update(id: string, data: Partial<Omit<MessageThreadDto, 'id' | 'createdAt' | 'updatedAt'>>): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        subject: string;
        userId: string | null;
        adminId: string | null;
        status: string;
        priority: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        subject: string;
        userId: string | null;
        adminId: string | null;
        status: string;
        priority: string;
    }>;
}
