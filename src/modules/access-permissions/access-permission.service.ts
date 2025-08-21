import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { AccessPermissionDto } from './dto/access-permission.dto';

@Injectable()
export class AccessPermissionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    data: Omit<AccessPermissionDto, 'id' | 'createdAt'>,
  ) {
    return this.prisma.accessPermission.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.accessPermission.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const permission = await this.prisma.accessPermission.findUnique({
      where: { id },
    });

    if (!permission) {
      throw new NotFoundException(
        `Permissão com ID ${id} não encontrada`,
      );
    }

    return permission;
  }

  async update(
    id: string,
    data: Partial<Omit<AccessPermissionDto, 'id' | 'createdAt'>>,
  ) {
    return this.prisma.accessPermission.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    await this.findOne(id); // valida existência
    return this.prisma.accessPermission.delete({
      where: { id },
    });
  }
}
