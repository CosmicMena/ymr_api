import { PrismaService } from '../../common/prisma/prisma.service';
import { AccessPermissionDto } from './dto/access-permission.dto';
export declare class AccessPermissionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Omit<AccessPermissionDto, 'id' | 'createdAt'>): Promise<{
        name: string;
        description: string | null;
        id: string;
        createdAt: Date;
        resource: string;
        action: string;
    }>;
    findAll(): Promise<{
        name: string;
        description: string | null;
        id: string;
        createdAt: Date;
        resource: string;
        action: string;
    }[]>;
    findOne(id: string): Promise<{
        name: string;
        description: string | null;
        id: string;
        createdAt: Date;
        resource: string;
        action: string;
    }>;
    update(id: string, data: Partial<Omit<AccessPermissionDto, 'id' | 'createdAt'>>): Promise<{
        name: string;
        description: string | null;
        id: string;
        createdAt: Date;
        resource: string;
        action: string;
    }>;
    remove(id: string): Promise<{
        name: string;
        description: string | null;
        id: string;
        createdAt: Date;
        resource: string;
        action: string;
    }>;
}
