import { NewsletterSubscriptionService } from './newsletter-subscription.service';
import { NewsletterSubscriptionDto, NewsletterSubscriptionFilterDto } from './dto/newsletter-subscription.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { SuccessResponseDto } from '../../common/dto/response.dto';
export declare class NewsletterSubscriptionController {
    private readonly service;
    constructor(service: NewsletterSubscriptionService);
    create(data: Omit<NewsletterSubscriptionDto, 'id' | 'subscribedAt' | 'unsubscribedAt'>): Promise<SuccessResponseDto<{
        name: string | null;
        email: string;
        id: string;
        isActive: boolean;
        interests: string[];
        subscribedAt: Date;
        unsubscribedAt: Date | null;
    }>>;
    findAll(pagination: PaginationDto, filter: NewsletterSubscriptionFilterDto): Promise<SuccessResponseDto<{
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
    }>>;
    findOne(id: string): Promise<SuccessResponseDto<{
        name: string | null;
        email: string;
        id: string;
        isActive: boolean;
        interests: string[];
        subscribedAt: Date;
        unsubscribedAt: Date | null;
    }>>;
    update(id: string, data: Partial<Omit<NewsletterSubscriptionDto, 'id' | 'subscribedAt' | 'unsubscribedAt'>>): Promise<SuccessResponseDto<{
        name: string | null;
        email: string;
        id: string;
        isActive: boolean;
        interests: string[];
        subscribedAt: Date;
        unsubscribedAt: Date | null;
    }>>;
    remove(id: string): Promise<SuccessResponseDto<any>>;
}
