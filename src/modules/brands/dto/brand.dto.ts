import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean, IsUUID } from 'class-validator';

export class BrandDto {
  @ApiProperty({ description: 'ID da marca', example: 'uuid' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Nome da marca', example: 'Caterpillar' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'URL do logo da marca', example: 'https://exemplo.com/logo.png', required: false })
  @IsOptional()
  @IsString()
  logoUrl?: string;

  @ApiProperty({ description: 'Descrição da marca', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Marca ativa?', example: true, default: true })
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({ description: 'Data de criação', example: '2024-08-19T19:00:00.000Z' })
  @IsString()
  createdAt: string;

  @ApiProperty({ description: 'Data de atualização', example: '2024-08-19T19:00:00.000Z' })
  @IsString()
  updatedAt: string;
}
