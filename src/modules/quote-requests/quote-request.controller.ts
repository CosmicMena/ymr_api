import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuoteRequestService } from './quote-request.service';
import { QuoteRequestDto } from './dto/quote-request.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('quote-requests')
@Controller('quote-requests')
export class QuoteRequestController {
  constructor(private readonly service: QuoteRequestService) {}

  @Post()
  @ApiOperation({ summary: 'Criar nova solicitação de orçamento' })
  @ApiResponse({ status: 201, description: 'Solicitação criada com sucesso.' })
  async create(@Body() data: Omit<QuoteRequestDto, 'id' | 'createdAt' | 'updatedAt'>) {
    return this.service.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as solicitações de orçamento' })
  async findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter solicitação de orçamento pelo ID' })
  async findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar solicitação de orçamento pelo ID' })
  async update(
    @Param('id') id: string,
    @Body() data: Partial<Omit<QuoteRequestDto, 'id' | 'createdAt' | 'updatedAt'>>,
  ) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover solicitação de orçamento pelo ID' })
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
