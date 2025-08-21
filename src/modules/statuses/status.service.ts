import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { StatusDto } from './dto/status.dto';

@Injectable()
export class StatusService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Omit<StatusDto, 'id'>) {
    return this.prisma.status.create({ data });
  }

  async findAll() {
    return this.prisma.status.findMany({
      orderBy: { name: 'asc' },
    });
  }

  async findOne(id: string) {
    const status = await this.prisma.status.findUnique({ where: { id } });
    if (!status) throw new NotFoundException(`Status não encontrado`);
    return status;
  }

  async update(id: string, data: Partial<Omit<StatusDto, 'id'>>) {
    await this.findOne(id);
    return this.prisma.status.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.status.delete({ where: { id } });
  }
}
