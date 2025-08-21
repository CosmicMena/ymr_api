import { AdminUserService } from './admin-user.service';
import { AdminUserDto } from './dto/admin-user.dto';
export declare class AdminUserController {
    private readonly adminUserService;
    constructor(adminUserService: AdminUserService);
    create(data: Omit<AdminUserDto, 'id' | 'createdAt' | 'updatedAt'>): Promise<{
        id: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        email: string;
        avatarUrl: string | null;
        passwordHash: string;
        updatedAt: Date;
        lastLogin: Date | null;
        roleId: string;
        createdBy: string | null;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        email: string;
        avatarUrl: string | null;
        passwordHash: string;
        updatedAt: Date;
        lastLogin: Date | null;
        roleId: string;
        createdBy: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        email: string;
        avatarUrl: string | null;
        passwordHash: string;
        updatedAt: Date;
        lastLogin: Date | null;
        roleId: string;
        createdBy: string | null;
    }>;
    update(id: string, data: Partial<Omit<AdminUserDto, 'id' | 'createdAt' | 'updatedAt'>>): Promise<{
        id: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        email: string;
        avatarUrl: string | null;
        passwordHash: string;
        updatedAt: Date;
        lastLogin: Date | null;
        roleId: string;
        createdBy: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        email: string;
        avatarUrl: string | null;
        passwordHash: string;
        updatedAt: Date;
        lastLogin: Date | null;
        roleId: string;
        createdBy: string | null;
    }>;
}
