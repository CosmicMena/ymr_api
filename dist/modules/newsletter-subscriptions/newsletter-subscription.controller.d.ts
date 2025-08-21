import { NewsletterSubscriptionService } from './newsletter-subscription.service';
import { NewsletterSubscriptionDto } from './dto/newsletter-subscription.dto';
export declare class NewsletterSubscriptionController {
    private readonly service;
    constructor(service: NewsletterSubscriptionService);
    create(data: Omit<NewsletterSubscriptionDto, 'id' | 'subscribedAt' | 'unsubscribedAt'>): Promise<{
        id: string;
        name: string | null;
        isActive: boolean;
        email: string;
        subscribedAt: Date;
        unsubscribedAt: Date | null;
        interests: string[];
    }>;
    findAll(): Promise<{
        id: string;
        name: string | null;
        isActive: boolean;
        email: string;
        subscribedAt: Date;
        unsubscribedAt: Date | null;
        interests: string[];
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string | null;
        isActive: boolean;
        email: string;
        subscribedAt: Date;
        unsubscribedAt: Date | null;
        interests: string[];
    }>;
    update(id: string, data: Partial<Omit<NewsletterSubscriptionDto, 'id' | 'subscribedAt' | 'unsubscribedAt'>>): Promise<{
        id: string;
        name: string | null;
        isActive: boolean;
        email: string;
        subscribedAt: Date;
        unsubscribedAt: Date | null;
        interests: string[];
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string | null;
        isActive: boolean;
        email: string;
        subscribedAt: Date;
        unsubscribedAt: Date | null;
        interests: string[];
    }>;
}
