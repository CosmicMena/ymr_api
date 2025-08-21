import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QuoteItemService } from './quote-item.service';
import { QuoteItemDto } from './dto/quote-item.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('quote-items')
@Controller('quote-items')
export class QuoteItemController {
  constructor(private readonly service: QuoteItemService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo item de orçamento' })
  @ApiResponse({ status: 201, description: 'Item criado com sucesso.' })
  async create(@Body() data: Omit<QuoteItemDto, 'id' | 'createdAt'>) {
    return this.service.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os itens de orçamento' })
  async findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter item de orçamento pelo ID' })
  async findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar item de orçamento pelo ID' })
  async update(
    @Param('id') id: string,
    @Body() data: Partial<Omit<QuoteItemDto, 'id' | 'createdAt'>>,
  ) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover item de orçamento pelo ID' })
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
