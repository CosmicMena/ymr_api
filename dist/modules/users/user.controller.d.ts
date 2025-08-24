import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto, UserFilterDto } from './dto/user.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<{
        id: string;
        name: string;
        email: string;
        city: string;
        country: string;
        emailVerified: boolean;
        isActive: boolean;
        createdAt: Date;
    }>;
    findAll(paginationDto: PaginationDto, filterDto: UserFilterDto): Promise<{
        data: {
            id: string;
            name: string;
            email: string;
            phone: string;
            city: string;
            country: string;
            company: string;
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
        id: string;
        name: string;
        email: string;
        city: string;
        country: string;
        company: string;
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
        id: string;
        name: string;
        email: string;
        phone: string;
        birthDate: Date;
        address: string;
        city: string;
        country: string;
        company: string;
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
        id: string;
        name: string;
        email: string;
        city: string;
        country: string;
        emailVerified: boolean;
        isActive: boolean;
        updatedAt: Date;
    }>;
    verifyEmail(id: string): Promise<{
        id: string;
        email: string;
        emailVerified: boolean;
        updatedAt: Date;
    }>;
    toggleStatus(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        isActive: boolean;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        isActive: boolean;
        updatedAt: Date;
    }>;
    getExampleUser(): {
        id: string;
        name: string;
        email: string;
        phone: string;
        birthDate: string;
        address: string;
        city: string;
        country: string;
        company: string;
        position: string;
        avatarUrl: string;
        emailVerified: boolean;
        isActive: boolean;
        preferredContactMethod: string;
        createdAt: string;
        updatedAt: string;
        lastLogin: string;
    };
}
