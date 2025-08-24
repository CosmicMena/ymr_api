import { AdminUserService } from './admin-user.service';
import { AdminUserDto } from './dto/admin-user.dto';
export declare class AdminUserController {
    private readonly adminUserService;
    constructor(adminUserService: AdminUserService);
    create(data: Omit<AdminUserDto, 'id' | 'createdAt' | 'updatedAt'>): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        email: string;
        passwordHash: string;
        avatarUrl: string | null;
        roleId: string;
        isActive: boolean;
        lastLogin: Date | null;
        createdBy: string | null;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        email: string;
        passwordHash: string;
        avatarUrl: string | null;
        roleId: string;
        isActive: boolean;
        lastLogin: Date | null;
        createdBy: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        email: string;
        passwordHash: string;
        avatarUrl: string | null;
        roleId: string;
        isActive: boolean;
        lastLogin: Date | null;
        createdBy: string | null;
    }>;
    update(id: string, data: Partial<Omit<AdminUserDto, 'id' | 'createdAt' | 'updatedAt'>>): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        email: string;
        passwordHash: string;
        avatarUrl: string | null;
        roleId: string;
        isActive: boolean;
        lastLogin: Date | null;
        createdBy: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        email: string;
        passwordHash: string;
        avatarUrl: string | null;
        roleId: string;
        isActive: boolean;
        lastLogin: Date | null;
        createdBy: string | null;
    }>;
}
