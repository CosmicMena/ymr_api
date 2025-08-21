import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AdminUserService } from './admin-user.service';
import { AdminUserDto } from './dto/admin-user.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('admin-users')
@Controller('admin-users')
export class AdminUserController {
  constructor(private readonly adminUserService: AdminUserService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo administrador' })
  @ApiResponse({ status: 201, description: 'Administrador criado com sucesso.' })
  async create(@Body() data: Omit<AdminUserDto, 'id' | 'createdAt' | 'updatedAt'>) {
    return this.adminUserService.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os administradores' })
  async findAll() {
    return this.adminUserService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter um administrador pelo ID' })
  async findOne(@Param('id') id: string) {
    return this.adminUserService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um administrador pelo ID' })
  async update(
    @Param('id') id: string,
    @Body() data: Partial<Omit<AdminUserDto, 'id' | 'createdAt' | 'updatedAt'>>,
  ) {
    return this.adminUserService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um administrador pelo ID' })
  async remove(@Param('id') id: string) {
    return this.adminUserService.remove(id);
  }
}
