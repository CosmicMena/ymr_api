import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { ShoppingCartDto } from './dto/shopping-cart.dto';

@Injectable()
export class ShoppingCartService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Omit<ShoppingCartDto, 'createdAt' | 'updatedAt'>) {
    return this.prisma.shoppingCart.create({ data });
  }

  async findAll() {
    return this.prisma.shoppingCart.findMany({
      include: { user: true, product: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const cart = await this.prisma.shoppingCart.findUnique({
      where: { id },
      include: { user: true, product: true },
    });
    if (!cart) throw new NotFoundException(`Carrinho não encontrado`);
    return cart;
  }

  async update(id: string, data: Partial<Omit<ShoppingCartDto, 'id' | 'createdAt' | 'updatedAt'>>) {
    await this.findOne(id);
    return this.prisma.shoppingCart.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.shoppingCart.delete({ where: { id } });
  }
}
