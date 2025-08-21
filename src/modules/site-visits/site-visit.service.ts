import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { SiteVisitDto } from './dto/site-visit.dto';

@Injectable()
export class SiteVisitService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Omit<SiteVisitDto, 'createdAt'>) {
    return this.prisma.siteVisit.create({ data });
  }

  async findAll() {
    return this.prisma.siteVisit.findMany({
      include: { user: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const visit = await this.prisma.siteVisit.findUnique({
      where: { id },
      include: { user: true },
    });
    if (!visit) throw new NotFoundException(`Visita não encontrada`);
    return visit;
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.siteVisit.delete({ where: { id } });
  }
}
