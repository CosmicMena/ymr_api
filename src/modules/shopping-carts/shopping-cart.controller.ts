import { Controller, Get, Post, Param, Body, Delete, Patch } from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCartDto } from './dto/shopping-cart.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('shopping-carts')
@Controller('shopping-carts')
export class ShoppingCartController {
  constructor(private readonly service: ShoppingCartService) {}

  @Post()
  @ApiOperation({ summary: 'Adicionar item ao carrinho' })
  async create(@Body() data: Omit<ShoppingCartDto, 'createdAt' | 'updatedAt'>) {
    return this.service.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os itens do carrinho' })
  async findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter item específico do carrinho' })
  async findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar item do carrinho' })
  async update(
    @Param('id') id: string,
    @Body() data: Partial<Omit<ShoppingCartDto, 'id' | 'createdAt' | 'updatedAt'>>
  ) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover item do carrinho' })
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
