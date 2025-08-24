import { Controller, Get, Post, Param, Body, Delete, UseGuards } from '@nestjs/common';
import { RolePermissionService } from './role-permission.service';
import { RolePermissionDto } from './dto/role-permission.dto';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';

@ApiTags('RolePermissions')
@ApiBearerAuth('JWT-auth')
@Controller('role-permissions')
@UseGuards(JwtAuthGuard, RolesGuard)
export class RolePermissionController {
  constructor(private readonly service: RolePermissionService) {}

  @Post()
  @ApiOperation({ summary: 'Conceder permissão a um papel' })
  async create(@Body() data: Omit<RolePermissionDto, 'grantedAt'>) {
    return this.service.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as permissões de papéis' })
  async findAll() {
    return this.service.findAll();
  }

  @Get(':roleId/:permissionId')
  @ApiOperation({ summary: 'Obter permissão específica de um papel' })
  async findOne(@Param('roleId') roleId: string, @Param('permissionId') permissionId: string) {
    return this.service.findOne(roleId, permissionId);
  }

  @Delete(':roleId/:permissionId')
  @ApiOperation({ summary: 'Revogar permissão de um papel' })
  async remove(@Param('roleId') roleId: string, @Param('permissionId') permissionId: string) {
    return this.service.remove(roleId, permissionId);
  }
}
