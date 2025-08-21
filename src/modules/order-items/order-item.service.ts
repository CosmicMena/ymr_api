import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { OrderItemDto } from './dto/order-item.dto';

@Injectable()
export class OrderItemService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Omit<OrderItemDto, 'id' | 'createdAt'>) {
    return this.prisma.orderItem.create({ data });
  }

  async findAll() {
    return this.prisma.orderItem.findMany({
      orderBy: { createdAt: 'asc' },
    });
  }

  async findOne(id: string) {
    const item = await this.prisma.orderItem.findUnique({ where: { id } });
    if (!item) throw new NotFoundException(`Item do pedido com ID ${id} não encontrado`);
    return item;
  }

  async update(id: string, data: Partial<Omit<OrderItemDto, 'id' | 'createdAt'>>) {
    return this.prisma.orderItem.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.orderItem.delete({ where: { id } });
  }
}
