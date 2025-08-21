import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsString, IsOptional } from 'class-validator';

export class AccessPermissionDto {
  @ApiProperty({ description: 'ID da permissão', example: 'uuid' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Nome da permissão', example: 'Editar Produto' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Recurso', example: 'Product' })
  @IsString()
  resource: string;

  @ApiProperty({ description: 'Ação', example: 'edit' })
  @IsString()
  action: string;

  @ApiProperty({ description: 'Descrição', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Data de criação', example: '2024-08-19T19:00:00.000Z' })
  @IsString()
  createdAt: string;
}
