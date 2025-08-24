import { PrismaService } from '../../common/prisma/prisma.service';
import { NewsletterSubscriptionDto } from './dto/newsletter-subscription.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { NewsletterSubscriptionFilterDto } from './dto/newsletter-subscription.dto';
export declare class NewsletterSubscriptionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Omit<NewsletterSubscriptionDto, 'id' | 'subscribedAt' | 'unsubscribedAt'>): Promise<{
        name: string | null;
        email: string;
        id: string;
        isActive: boolean;
        interests: string[];
        subscribedAt: Date;
        unsubscribedAt: Date | null;
    }>;
    findAll(paginationDto: PaginationDto, filterDto: NewsletterSubscriptionFilterDto): Promise<{
        data: {
            name: string | null;
            email: string;
            id: string;
            isActive: boolean;
            interests: string[];
            subscribedAt: Date;
            unsubscribedAt: Date | null;
        }[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    findOne(id: string): Promise<{
        name: string | null;
        email: string;
        id: string;
        isActive: boolean;
        interests: string[];
        subscribedAt: Date;
        unsubscribedAt: Date | null;
    }>;
    update(id: string, data: Partial<Omit<NewsletterSubscriptionDto, 'id' | 'subscribedAt' | 'unsubscribedAt'>>): Promise<{
        name: string | null;
        email: string;
        id: string;
        isActive: boolean;
        interests: string[];
        subscribedAt: Date;
        unsubscribedAt: Date | null;
    }>;
    remove(id: string): Promise<{
        name: string | null;
        email: string;
        id: string;
        isActive: boolean;
        interests: string[];
        subscribedAt: Date;
        unsubscribedAt: Date | null;
    }>;
}
