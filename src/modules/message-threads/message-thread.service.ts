import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { MessageThreadDto } from './dto/message-thread.dto';

@Injectable()
export class MessageThreadService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Omit<MessageThreadDto, 'id' | 'createdAt' | 'updatedAt'>) {
    return this.prisma.messageThread.create({ data });
  }

  async findAll() {
    return this.prisma.messageThread.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const thread = await this.prisma.messageThread.findUnique({ where: { id } });
    if (!thread) throw new NotFoundException(`Thread com ID ${id} não encontrado`);
    return thread;
  }

  async update(
    id: string,
    data: Partial<Omit<MessageThreadDto, 'id' | 'createdAt' | 'updatedAt'>>,
  ) {
    return this.prisma.messageThread.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.messageThread.delete({ where: { id } });
  }
}
