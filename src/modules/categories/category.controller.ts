import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('categories')
@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova categoria' })
  @ApiResponse({ status: 201, description: 'Categoria criada com sucesso.' })
  async create(@Body() data: Omit<CategoryDto, 'id' | 'createdAt' | 'updatedAt'>) {
    return this.categoryService.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as categorias' })
  async findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter uma categoria pelo ID' })
  async findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma categoria pelo ID' })
  async update(
    @Param('id') id: string,
    @Body() data: Partial<Omit<CategoryDto, 'id' | 'createdAt' | 'updatedAt'>>,
  ) {
    return this.categoryService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma categoria pelo ID' })
  async remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}
