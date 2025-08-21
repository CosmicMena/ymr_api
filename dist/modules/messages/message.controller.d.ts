import { MessageService } from './message.service';
import { MessageDto } from './dto/message.dto';
export declare class MessageController {
    private readonly service;
    constructor(service: MessageService);
    create(data: Omit<MessageDto, 'id' | 'createdAt'>): Promise<{
        id: string;
        createdAt: Date;
        threadId: string;
        senderType: string;
        senderId: string;
        content: string;
        attachments: import("@prisma/client/runtime/library").JsonValue | null;
        isRead: boolean;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        threadId: string;
        senderType: string;
        senderId: string;
        content: string;
        attachments: import("@prisma/client/runtime/library").JsonValue | null;
        isRead: boolean;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        threadId: string;
        senderType: string;
        senderId: string;
        content: string;
        attachments: import("@prisma/client/runtime/library").JsonValue | null;
        isRead: boolean;
    }>;
    update(id: string, data: Partial<Omit<MessageDto, 'id' | 'createdAt'>>): Promise<{
        id: string;
        createdAt: Date;
        threadId: string;
        senderType: string;
        senderId: string;
        content: string;
        attachments: import("@prisma/client/runtime/library").JsonValue | null;
        isRead: boolean;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        threadId: string;
        senderType: string;
        senderId: string;
        content: string;
        attachments: import("@prisma/client/runtime/library").JsonValue | null;
        isRead: boolean;
    }>;
}
