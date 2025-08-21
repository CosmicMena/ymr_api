import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccessPermissionService } from './access-permission.service';
import { AccessPermissionDto } from './dto/access-permission.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('access-permissions')
@Controller('access-permissions')
export class AccessPermissionController {
  constructor(
    private readonly accessPermissionService: AccessPermissionService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova permissão de acesso' })
  @ApiResponse({ status: 201, description: 'Permissão criada com sucesso.' })
  async create(
    @Body() data: Omit<AccessPermissionDto, 'id' | 'createdAt'>,
  ) {
    return this.accessPermissionService.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as permissões' })
  async findAll() {
    return this.accessPermissionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter uma permissão pelo ID' })
  async findOne(@Param('id') id: string) {
    return this.accessPermissionService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma permissão pelo ID' })
  async update(
    @Param('id') id: string,
    @Body() data: Partial<Omit<AccessPermissionDto, 'id' | 'createdAt'>>,
  ) {
    return this.accessPermissionService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma permissão pelo ID' })
  async remove(@Param('id') id: string) {
    return this.accessPermissionService.remove(id);
  }
}
