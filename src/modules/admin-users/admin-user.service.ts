import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { AdminUserDto } from './dto/admin-user.dto';

@Injectable()
export class AdminUserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Omit<AdminUserDto, 'id' | 'createdAt' | 'updatedAt'>) {
    return this.prisma.adminUser.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.adminUser.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const admin = await this.prisma.adminUser.findUnique({
      where: { id },
    });

    if (!admin) {
      throw new NotFoundException(`Administrador com ID ${id} não encontrado`);
    }

    return admin;
  }

  async update(
    id: string,
    data: Partial<Omit<AdminUserDto, 'id' | 'createdAt' | 'updatedAt'>>,
  ) {
    return this.prisma.adminUser.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    await this.findOne(id); // garante que existe
    return this.prisma.adminUser.delete({
      where: { id },
    });
  }
}
