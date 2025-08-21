import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { ActivityLogDto } from './dto/activity-log.dto';

@Injectable()
export class ActivityLogService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Omit<ActivityLogDto, 'id' | 'createdAt'>) {
    return this.prisma.activityLog.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.activityLog.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const log = await this.prisma.activityLog.findUnique({
      where: { id },
    });

    if (!log) {
      throw new NotFoundException(`Log com ID ${id} não encontrado`);
    }

    return log;
  }

  async update(
    id: string,
    data: Partial<Omit<ActivityLogDto, 'id' | 'createdAt'>>,
  ) {
    return this.prisma.activityLog.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    await this.findOne(id); // valida existência
    return this.prisma.activityLog.delete({
      where: { id },
    });
  }
}
