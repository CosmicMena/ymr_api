import { AccessPermissionService } from './access-permission.service';
import { AccessPermissionDto } from './dto/access-permission.dto';
export declare class AccessPermissionController {
    private readonly accessPermissionService;
    constructor(accessPermissionService: AccessPermissionService);
    create(data: Omit<AccessPermissionDto, 'id' | 'createdAt'>): Promise<{
        id: string;
        name: string;
        description: string | null;
        createdAt: Date;
        action: string;
        resource: string;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        description: string | null;
        createdAt: Date;
        action: string;
        resource: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        createdAt: Date;
        action: string;
        resource: string;
    }>;
    update(id: string, data: Partial<Omit<AccessPermissionDto, 'id' | 'createdAt'>>): Promise<{
        id: string;
        name: string;
        description: string | null;
        createdAt: Date;
        action: string;
        resource: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        createdAt: Date;
        action: string;
        resource: string;
    }>;
}
