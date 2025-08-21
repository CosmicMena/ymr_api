import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { QuoteItemDto } from './dto/quote-item.dto';

@Injectable()
export class QuoteItemService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Omit<QuoteItemDto, 'id' | 'createdAt'>) {
    return this.prisma.quoteItem.create({ data });
  }

  async findAll() {
    return this.prisma.quoteItem.findMany({
      orderBy: { createdAt: 'asc' },
      include: { product: true, quoteRequest: true },
    });
  }

  async findOne(id: string) {
    const item = await this.prisma.quoteItem.findUnique({
      where: { id },
      include: { product: true, quoteRequest: true },
    });
    if (!item) throw new NotFoundException(`Item de orçamento com ID ${id} não encontrado`);
    return item;
  }

  async update(
    id: string,
    data: Partial<Omit<QuoteItemDto, 'id' | 'createdAt'>>,
  ) {
    return this.prisma.quoteItem.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.quoteItem.delete({ where: { id } });
  }
}
