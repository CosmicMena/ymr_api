import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { OrderDto } from './dto/order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Omit<OrderDto, 'id' | 'createdAt' | 'updatedAt'>) {
    return this.prisma.order.create({ data });
  }

  async findAll() {
    return this.prisma.order.findMany({
      orderBy: { createdAt: 'asc' },
      include: { orderItems: true },
    });
  }

  async findOne(id: string) {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: { orderItems: true },
    });
    if (!order) throw new NotFoundException(`Pedido com ID ${id} não encontrado`);
    return order;
  }

  async update(
    id: string,
    data: Partial<Omit<OrderDto, 'id' | 'createdAt' | 'updatedAt'>>,
  ) {
    return this.prisma.order.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.order.delete({ where: { id } });
  }
}
