import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { QuoteRequestDto } from './dto/quote-request.dto';

@Injectable()
export class QuoteRequestService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Omit<QuoteRequestDto, 'id' | 'createdAt' | 'updatedAt'>) {
    return this.prisma.quoteRequest.create({ data });
  }

  async findAll() {
    return this.prisma.quoteRequest.findMany({
      orderBy: { createdAt: 'asc' },
      include: { user: true, status: true, quoteItems: true },
    });
  }

  async findOne(id: string) {
    const request = await this.prisma.quoteRequest.findUnique({
      where: { id },
      include: { user: true, status: true, quoteItems: true },
    });
    if (!request)
      throw new NotFoundException(`Solicitação de orçamento com ID ${id} não encontrada`);
    return request;
  }

  async update(
    id: string,
    data: Partial<Omit<QuoteRequestDto, 'id' | 'createdAt' | 'updatedAt'>>,
  ) {
    return this.prisma.quoteRequest.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.quoteRequest.delete({ where: { id } });
  }
}
