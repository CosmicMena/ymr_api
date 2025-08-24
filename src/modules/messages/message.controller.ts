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
import { MessageService } from './message.service';
import { MessageDto } from './dto/message.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';

@ApiTags('Messages')
@ApiBearerAuth('JWT-auth')
@Controller('messages')
@UseGuards(JwtAuthGuard, RolesGuard)
export class MessageController {
  constructor(private readonly service: MessageService) {}

  @Post()
  @ApiOperation({ summary: 'Criar nova mensagem' })
  @ApiResponse({ status: 201, description: 'Mensagem criada com sucesso.' })
  async create(@Body() data: Omit<MessageDto, 'id' | 'createdAt'>) {
    return this.service.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as mensagens' })
  async findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter uma mensagem pelo ID' })
  async findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma mensagem pelo ID' })
  async update(
    @Param('id') id: string,
    @Body() data: Partial<Omit<MessageDto, 'id' | 'createdAt'>>,
  ) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma mensagem pelo ID' })
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
