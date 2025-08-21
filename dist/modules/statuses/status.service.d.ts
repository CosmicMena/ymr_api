import { PrismaService } from '../../common/prisma/prisma.service';
import { StatusDto } from './dto/status.dto';
export declare class StatusService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Omit<StatusDto, 'id'>): Promise<{
        id: string;
        name: string;
        description: string | null;
        color: string | null;
        isActive: boolean;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        description: string | null;
        color: string | null;
        isActive: boolean;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        color: string | null;
        isActive: boolean;
    }>;
    update(id: string, data: Partial<Omit<StatusDto, 'id'>>): Promise<{
        id: string;
        name: string;
        description: string | null;
        color: string | null;
        isActive: boolean;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        color: string | null;
        isActive: boolean;
    }>;
}
