import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { MessageDto } from './dto/message.dto';

@Injectable()
export class MessageService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Omit<MessageDto, 'id' | 'createdAt'>) {
    return this.prisma.message.create({ data });
  }

  async findAll() {
    return this.prisma.message.findMany({
      orderBy: { createdAt: 'asc' },
    });
  }

  async findOne(id: string) {
    const message = await this.prisma.message.findUnique({ where: { id } });
    if (!message) throw new NotFoundException(`Mensagem com ID ${id} não encontrada`);
    return message;
  }

  async update(
    id: string,
    data: Partial<Omit<MessageDto, 'id' | 'createdAt'>>,
  ) {
    return this.prisma.message.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.message.delete({ where: { id } });
  }
}
