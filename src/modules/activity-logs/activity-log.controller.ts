import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ActivityLogService } from './activity-log.service';
import { ActivityLogDto } from './dto/activity-log.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('activity-logs')
@Controller('activity-logs')
export class ActivityLogController {
  constructor(private readonly activityLogService: ActivityLogService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo log de atividade' })
  @ApiResponse({ status: 201, description: 'Log criado com sucesso.' })
  async create(@Body() data: Omit<ActivityLogDto, 'id' | 'createdAt'>) {
    return this.activityLogService.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os logs de atividade' })
  async findAll() {
    return this.activityLogService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter um log pelo ID' })
  async findOne(@Param('id') id: string) {
    return this.activityLogService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um log pelo ID' })
  async update(
    @Param('id') id: string,
    @Body() data: Partial<Omit<ActivityLogDto, 'id' | 'createdAt'>>,
  ) {
    return this.activityLogService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um log pelo ID' })
  async remove(@Param('id') id: string) {
    return this.activityLogService.remove(id);
  }
}
