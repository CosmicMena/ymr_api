import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { SiteVisitService } from './site-visit.service';
import { SiteVisitDto } from './dto/site-visit.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('site-visits')
@Controller('site-visits')
export class SiteVisitController {
  constructor(private readonly service: SiteVisitService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar nova visita ao site' })
  async create(@Body() data: Omit<SiteVisitDto, 'createdAt'>) {
    return this.service.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as visitas' })
  async findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter visita específica' })
  async findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover visita' })
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
