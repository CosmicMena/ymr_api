import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean, IsUUID } from 'class-validator';

export class AdminUserDto {
  @ApiProperty({ description: 'ID do administrador', example: 'uuid' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Nome do administrador', example: 'Maria Admin' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'E-mail do administrador', example: 'admin@email.com' })
  @IsString()
  email: string;

  @ApiProperty({ description: 'Hash da senha', required: false })
  @IsString()
  passwordHash: string;

  @ApiProperty({ description: 'URL do avatar', example: 'https://exemplo.com/avatar.png', required: false })
  @IsOptional()
  @IsString()
  avatarUrl?: string;

  @ApiProperty({ description: 'ID do papel', example: 'uuid' })
  @IsUUID()
  roleId: string;

  @ApiProperty({ description: 'Administrador ativo?', example: true, default: true })
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({ description: 'Último login', example: '2024-08-19T19:00:00.000Z', required: false })
  @IsOptional()
  @IsString()
  lastLogin?: string;

  @ApiProperty({ description: 'ID do criador', example: 'uuid', required: false })
  @IsOptional()
  @IsUUID()
  createdBy?: string;

  @ApiProperty({ description: 'Data de criação', example: '2024-08-19T19:00:00.000Z' })
  @IsString()
  createdAt: string;

  @ApiProperty({ description: 'Data de atualização', example: '2024-08-19T19:00:00.000Z' })
  @IsString()
  updatedAt: string;
}
