import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsString, IsOptional } from 'class-validator';

export class UserActivityDto {
  @ApiProperty({ description: 'ID da atividade', example: 'uuid' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'ID do usuário', example: 'uuid' })
  @IsUUID()
  userId: string;

  @ApiProperty({ description: 'Tipo de atividade', example: 'login' })
  @IsString()
  activityType: string;

  @ApiProperty({ description: 'Título', example: 'Login realizado' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Descrição', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Ícone', example: 'login', required: false })
  @IsOptional()
  @IsString()
  icon?: string;

  @ApiProperty({ description: 'Cor', example: '#FF0000', required: false })
  @IsOptional()
  @IsString()
  color?: string;

  @ApiProperty({ description: 'Metadados (JSON)', required: false })
  @IsOptional()
  metadata?: any;

  @ApiProperty({ description: 'Data de criação', example: '2024-08-19T19:00:00.000Z' })
  @IsString()
  createdAt: string;
}
