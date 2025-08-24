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
import { OrderItemService } from './order-item.service';
import { OrderItemDto } from './dto/order-item.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';

@ApiTags('OrderItems')
@ApiBearerAuth('JWT-auth')
@Controller('order-items')
@UseGuards(JwtAuthGuard, RolesGuard)
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
