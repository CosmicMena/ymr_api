import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsUUID } from 'class-validator';

export class ActivityLogDto {
  @ApiProperty({ description: 'ID do log', example: 'uuid' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'ID do usuário', example: 'uuid', required: false })
  @IsOptional()
  @IsUUID()
  userId?: string;

  @ApiProperty({ description: 'ID do admin', example: 'uuid', required: false })
  @IsOptional()
  @IsUUID()
  adminId?: string;

  @ApiProperty({ description: 'Ação', example: 'login' })
  @IsString()
  action: string;

  @ApiProperty({ description: 'Descrição', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Tipo de recurso', example: 'User', required: false })
  @IsOptional()
  @IsString()
  resourceType?: string;

  @ApiProperty({ description: 'ID do recurso', example: 'uuid', required: false })
  @IsOptional()
  @IsUUID()
  resourceId?: string;

  @ApiProperty({ description: 'Endereço IP', example: '192.168.0.1', required: false })
  @IsOptional()
  @IsString()
  ipAddress?: string;

  @ApiProperty({ description: 'User Agent', required: false })
  @IsOptional()
  @IsString()
  userAgent?: string;

  @ApiProperty({ description: 'Metadados (JSON)', required: false })
  @IsOptional()
  metadata?: any;

  @ApiProperty({ description: 'Data de criação', example: '2024-08-19T19:00:00.000Z' })
  @IsString()
  createdAt: string;
}
