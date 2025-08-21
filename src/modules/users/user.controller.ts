import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo usuário' })
  async create(@Body() data: Omit<UserDto, 'id'>) {
    return this.service.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os usuários' })
  async findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter usuário específico' })
  async findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar usuário' })
  async update(@Param('id') id: string, @Body() data: Partial<Omit<UserDto, 'id'>>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover usuário' })
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }

  @Get('example')
  
  @ApiOperation({ summary: 'Exemplo de usuário' })
  @ApiResponse({
    status: 200,
    description: 'Retorna um usuário de exemplo',
    type: UserDto, // aqui você vincula o DTO que tem todos os campos
  })
  getExampleUser() {
    return {
      id: 'uuid-1234',
      name: 'João Silva',
      email: 'joao@email.com',
      country: 'Angola',
      isActive: true,
      emailVerified: false,
      preferredContactMethod: 'email',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }
}
