import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { NewsletterSubscriptionDto } from './dto/newsletter-subscription.dto';

@Injectable()
export class NewsletterSubscriptionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Omit<NewsletterSubscriptionDto, 'id' | 'subscribedAt' | 'unsubscribedAt'>) {
    return this.prisma.newsletterSubscription.create({ data });
  }

  async findAll() {
    return this.prisma.newsletterSubscription.findMany({
      orderBy: { subscribedAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const subscription = await this.prisma.newsletterSubscription.findUnique({ where: { id } });
    if (!subscription) throw new NotFoundException(`Inscrição com ID ${id} não encontrada`);
    return subscription;
  }

  async update(
    id: string,
    data: Partial<Omit<NewsletterSubscriptionDto, 'id' | 'subscribedAt' | 'unsubscribedAt'>>,
  ) {
    return this.prisma.newsletterSubscription.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.newsletterSubscription.delete({ where: { id } });
  }
}
