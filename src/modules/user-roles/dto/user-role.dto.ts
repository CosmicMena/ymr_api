import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean, IsUUID } from 'class-validator';

export class UserRoleDto {
  @ApiProperty({ description: 'ID do papel', example: 'uuid' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Nome do papel', example: 'Administrador' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Descrição do papel', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Permissões (JSON)', required: false, example: '{"canEdit":true}' })
  @IsOptional()
  permissions?: any;

  @ApiProperty({ description: 'Papel ativo?', example: true, default: true })
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({ description: 'Data de criação', example: '2024-08-19T19:00:00.000Z' })
  @IsString()
  createdAt: string;
}
