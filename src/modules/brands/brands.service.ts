import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { BrandDto } from './dto/brand.dto';

@Injectable()
export class BrandService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Omit<BrandDto, 'id' | 'createdAt' | 'updatedAt'>) {
    return this.prisma.brand.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.brand.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const brand = await this.prisma.brand.findUnique({
      where: { id },
    });

    if (!brand) {
      throw new NotFoundException(`Marca com ID ${id} não encontrada`);
    }

    return brand;
  }

  async update(id: string, data: Partial<Omit<BrandDto, 'id' | 'createdAt' | 'updatedAt'>>) {
    const brand = await this.prisma.brand.update({
      where: { id },
      data,
    });

    return brand;
  }

  async remove(id: string) {
    await this.findOne(id); // garante que existe
    return this.prisma.brand.delete({
      where: { id },
    });
  }
}
