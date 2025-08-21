import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { SubcategoryDto } from './dto/subcategory.dto';

@Injectable()
export class SubcategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Omit<SubcategoryDto, 'id'>) {
    return this.prisma.subcategory.create({ data });
  }

  async findAll() {
    return this.prisma.subcategory.findMany({
      orderBy: { name: 'asc' },
      include: { category: true },
    });
  }

  async findOne(id: string) {
    const subcategory = await this.prisma.subcategory.findUnique({ 
      where: { id },
      include: { category: true },
    });
    if (!subcategory) throw new NotFoundException(`Subcategoria não encontrada`);
    return subcategory;
  }

  async update(id: string, data: Partial<Omit<SubcategoryDto, 'id'>>) {
    await this.findOne(id);
    return this.prisma.subcategory.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.subcategory.delete({ where: { id } });
  }
}
