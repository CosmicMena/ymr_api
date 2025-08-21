import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UserStatisticsService } from './user-statistics.service';
import { UserStatisticsDto } from './dto/user-statistics.dto';

@ApiTags('user-statistics')
@Controller('user-statistics')
export class UserStatisticsController {
  constructor(private readonly service: UserStatisticsService) {}

  @Post()
  @ApiOperation({ summary: 'Criar estatísticas de usuário' })
  async create(@Body() data: Omit<UserStatisticsDto, 'id'>) {
    return this.service.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as estatísticas' })
  async findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter estatísticas por ID' })
  async findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'Obter estatísticas por ID do usuário' })
  async findByUserId(@Param('userId') userId: string) {
    return this.service.findByUserId(userId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar estatísticas de usuário' })
  async update(@Param('id') id: string, @Body() data: Partial<Omit<UserStatisticsDto, 'id'>>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover estatísticas de usuário' })
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
