import { PrismaService } from '../../common/prisma/prisma.service';
import { MessageDto } from './dto/message.dto';
export declare class MessageService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Omit<MessageDto, 'id' | 'createdAt'>): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        threadId: string;
        senderType: string;
        senderId: string;
        attachments: import("@prisma/client/runtime/library").JsonValue | null;
        isRead: boolean;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        threadId: string;
        senderType: string;
        senderId: string;
        attachments: import("@prisma/client/runtime/library").JsonValue | null;
        isRead: boolean;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        threadId: string;
        senderType: string;
        senderId: string;
        attachments: import("@prisma/client/runtime/library").JsonValue | null;
        isRead: boolean;
    }>;
    update(id: string, data: Partial<Omit<MessageDto, 'id' | 'createdAt'>>): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        threadId: string;
        senderType: string;
        senderId: string;
        attachments: import("@prisma/client/runtime/library").JsonValue | null;
        isRead: boolean;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        threadId: string;
        senderType: string;
        senderId: string;
        attachments: import("@prisma/client/runtime/library").JsonValue | null;
        isRead: boolean;
    }>;
}
