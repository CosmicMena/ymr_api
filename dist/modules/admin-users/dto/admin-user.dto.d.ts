export declare class AdminUserDto {
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    avatarUrl?: string;
    roleId: string;
    isActive: boolean;
    lastLogin?: string;
    createdBy?: string;
    createdAt: string;
    updatedAt: string;
}
