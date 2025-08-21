import { Controller, Get, Post, Param, Body, Patch, Delete } from '@nestjs/common';
import { SubcategoryService } from './subcategory.service';
import { SubcategoryDto } from './dto/subcategory.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('subcategories')
@Controller('subcategories')
export class SubcategoryController {
  constructor(private readonly service: SubcategoryService) {}

  @Post()
  @ApiOperation({ summary: 'Criar nova subcategoria' })
  async create(@Body() data: Omit<SubcategoryDto, 'id'>) {
    return this.service.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as subcategorias' })
  async findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter subcategoria específica' })
  async findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar subcategoria' })
  async update(@Param('id') id: string, @Body() data: Partial<Omit<SubcategoryDto, 'id'>>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover subcategoria' })
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
