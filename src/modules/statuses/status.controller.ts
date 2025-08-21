import { Controller, Get, Post, Param, Body, Patch, Delete } from '@nestjs/common';
import { StatusService } from './status.service';
import { StatusDto } from './dto/status.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('statuses')
@Controller('statuses')
export class StatusController {
  constructor(private readonly service: StatusService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo status' })
  async create(@Body() data: Omit<StatusDto, 'id'>) {
    return this.service.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os status' })
  async findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter status específico' })
  async findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar status' })
  async update(@Param('id') id: string, @Body() data: Partial<Omit<StatusDto, 'id'>>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover status' })
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
