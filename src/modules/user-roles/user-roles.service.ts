import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { UserRoleDto } from './dto/user-role.dto';

@Injectable()
export class UserRolesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Omit<UserRoleDto, 'id'>) {
    return this.prisma.userRole.create({ data });
  }

  async findAll() {
    return this.prisma.userRole.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const role = await this.prisma.userRole.findUnique({ where: { id } });
    if (!role) throw new NotFoundException('Papel não encontrado');
    return role;
  }

  async update(id: string, data: Partial<Omit<UserRoleDto, 'id'>>) {
    await this.findOne(id);
    return this.prisma.userRole.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.userRole.delete({ where: { id } });
  }
}
