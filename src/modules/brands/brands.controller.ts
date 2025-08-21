import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BrandService } from './brands.service';
import { BrandDto } from './dto/brand.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('brands')
@Controller('brands')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova marca' })
  @ApiResponse({ status: 201, description: 'Marca criada com sucesso.' })
  async create(
    @Body() data: Omit<BrandDto, 'id' | 'createdAt' | 'updatedAt'>,
  ) {
    return this.brandService.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as marcas' })
  async findAll() {
    return this.brandService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter uma marca pelo ID' })
  async findOne(@Param('id') id: string) {
    return this.brandService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma marca pelo ID' })
  async update(
    @Param('id') id: string,
    @Body() data: Partial<Omit<BrandDto, 'id' | 'createdAt' | 'updatedAt'>>,
  ) {
    return this.brandService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma marca pelo ID' })
  async remove(@Param('id') id: string) {
    return this.brandService.remove(id);
  }
}
