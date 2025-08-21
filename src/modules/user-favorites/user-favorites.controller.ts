import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UserFavoritesService } from './user-favorites.service';
import { UserFavoriteDto } from './dto/user-favorite.dto';

@ApiTags('user-favorites')
@Controller('user-favorites')
export class UserFavoritesController {
  constructor(private readonly service: UserFavoritesService) {}

  @Post()
  @ApiOperation({ summary: 'Adicionar produto aos favoritos do usuário' })
  async create(@Body() data: Omit<UserFavoriteDto, 'id' | 'createdAt'>) {
    return this.service.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os favoritos' })
  async findAll() {
    return this.service.findAll();
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'Listar favoritos de um usuário' })
  async findByUser(@Param('userId') userId: string) {
    return this.service.findByUser(userId);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover favorito pelo ID' })
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
