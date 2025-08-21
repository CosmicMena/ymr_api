import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderItemService } from './order-item.service';
import { OrderItemDto } from './dto/order-item.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('order-items')
@Controller('order-items')
export class OrderItemController {
  constructor(private readonly service: OrderItemService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo item de pedido' })
  @ApiResponse({ status: 201, description: 'Item criado com sucesso.' })
  async create(@Body() data: Omit<OrderItemDto, 'id' | 'createdAt'>) {
    return this.service.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os itens de pedidos' })
  async findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter um item pelo ID' })
  async findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um item pelo ID' })
  async update(
    @Param('id') id: string,
    @Body() data: Partial<Omit<OrderItemDto, 'id' | 'createdAt'>>,
  ) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um item pelo ID' })
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
