import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UserRolesService } from './user-roles.service';
import { UserRoleDto } from './dto/user-role.dto';

@ApiTags('user-roles')
@Controller('user-roles')
export class UserRolesController {
  constructor(private readonly service: UserRolesService) {}

  @Post()
  @ApiOperation({ summary: 'Criar papel de usuário' })
  async create(@Body() data: Omit<UserRoleDto, 'id'>) {
    return this.service.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os papéis de usuário' })
  async findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter papel por ID' })
  async findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar papel de usuário' })
  async update(@Param('id') id: string, @Body() data: Partial<Omit<UserRoleDto, 'id'>>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover papel de usuário' })
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
