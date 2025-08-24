import { PrismaService } from '../../common/prisma/prisma.service';
import { CreateUserDto, UpdateUserDto, UserFilterDto } from './dto/user.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        name: string;
        email: string;
        id: string;
        city: string;
        country: string;
        emailVerified: boolean;
        isActive: boolean;
        createdAt: Date;
    }>;
    findAll(paginationDto: PaginationDto, filterDto: UserFilterDto): Promise<{
        data: {
            name: string;
            email: string;
            phone: string;
            company: string;
            id: string;
            city: string;
            country: string;
            position: string;
            avatarUrl: string;
            emailVerified: boolean;
            isActive: boolean;
            preferredContactMethod: string;
            createdAt: Date;
            updatedAt: Date;
            lastLogin: Date;
        }[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    findActiveUsers(limit?: number): Promise<{
        name: string;
        email: string;
        company: string;
        id: string;
        city: string;
        country: string;
        isActive: boolean;
    }[]>;
    getUserStats(): Promise<{
        totalUsers: number;
        activeUsers: number;
        verifiedUsers: number;
        newUsersThisMonth: number;
        usersByCountry: {};
        usersByCities: {};
    }>;
    findOne(id: string): Promise<{
        name: string;
        email: string;
        phone: string;
        company: string;
        id: string;
        birthDate: Date;
        address: string;
        city: string;
        country: string;
        position: string;
        avatarUrl: string;
        emailVerified: boolean;
        isActive: boolean;
        preferredContactMethod: string;
        createdAt: Date;
        updatedAt: Date;
        lastLogin: Date;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        name: string;
        email: string;
        id: string;
        city: string;
        country: string;
        emailVerified: boolean;
        isActive: boolean;
        updatedAt: Date;
    }>;
    verifyEmail(id: string): Promise<{
        email: string;
        id: string;
        emailVerified: boolean;
        updatedAt: Date;
    }>;
    toggleStatus(id: string): Promise<{
        name: string;
        email: string;
        id: string;
        isActive: boolean;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        name: string;
        email: string;
        id: string;
        isActive: boolean;
        updatedAt: Date;
    }>;
    updateLastLogin(id: string): Promise<{
        id: string;
        lastLogin: Date;
    }>;
    findByEmail(email: string): Promise<{
        name: string;
        email: string;
        phone: string | null;
        company: string | null;
        id: string;
        googleId: string | null;
        birthDate: Date | null;
        address: string | null;
        city: string | null;
        country: string;
        position: string | null;
        avatarUrl: string | null;
        passwordHash: string | null;
        emailVerified: boolean;
        isActive: boolean;
        preferredContactMethod: string;
        createdAt: Date;
        updatedAt: Date;
        lastLogin: Date | null;
    }>;
    findByGoogleId(googleId: string): Promise<{
        name: string;
        email: string;
        phone: string | null;
        company: string | null;
        id: string;
        googleId: string | null;
        birthDate: Date | null;
        address: string | null;
        city: string | null;
        country: string;
        position: string | null;
        avatarUrl: string | null;
        passwordHash: string | null;
        emailVerified: boolean;
        isActive: boolean;
        preferredContactMethod: string;
        createdAt: Date;
        updatedAt: Date;
        lastLogin: Date | null;
    }>;
    getRecentUsers(days?: number): Promise<{
        name: string;
        email: string;
        id: string;
        city: string;
        country: string;
        createdAt: Date;
    }[]>;
}
