import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { MessageThreadService } from './message-thread.service';
import { MessageThreadDto } from './dto/message-thread.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';

@ApiTags('MessageThreads')
@ApiBearerAuth('JWT-auth')
@Controller('message-threads')
@UseGuards(JwtAuthGuard, RolesGuard)
export class MessageThreadController {
  constructor(private readonly service: MessageThreadService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo thread de mensagem' })
  @ApiResponse({ status: 201, description: 'Thread criado com sucesso.' })
  async create(@Body() data: Omit<MessageThreadDto, 'id' | 'createdAt' | 'updatedAt'>) {
    return this.service.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os threads' })
  async findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter um thread pelo ID' })
  async findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um thread pelo ID' })
  async update(
    @Param('id') id: string,
    @Body() data: Partial<Omit<MessageThreadDto, 'id' | 'createdAt' | 'updatedAt'>>,
  ) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um thread pelo ID' })
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
