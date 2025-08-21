import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { RolePermissionDto } from './dto/role-permission.dto';

@Injectable()
export class RolePermissionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Omit<RolePermissionDto, 'grantedAt'>) {
    return this.prisma.rolePermission.create({ data });
  }

  async findAll() {
    return this.prisma.rolePermission.findMany({
      include: { role: true, permission: true },
      orderBy: { grantedAt: 'asc' },
    });
  }

  async findOne(roleId: string, permissionId: string) {
    const rp = await this.prisma.rolePermission.findUnique({
      where: { roleId_permissionId: { roleId, permissionId } },
      include: { role: true, permission: true },
    });
    if (!rp) throw new NotFoundException(`RolePermission não encontrada`);
    return rp;
  }

  async remove(roleId: string, permissionId: string) {
    await this.findOne(roleId, permissionId);
    return this.prisma.rolePermission.delete({
      where: { roleId_permissionId: { roleId, permissionId } },
    });
  }
}
