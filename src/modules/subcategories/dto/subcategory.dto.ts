import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean, IsUUID } from 'class-validator';

export class SubcategoryDto {
  @ApiProperty({ description: 'ID da subcategoria', example: 'uuid' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Nome da subcategoria', example: 'Geradores Industriais' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'ID da categoria', example: 'uuid' })
  @IsUUID()
  categoryId: string;

  @ApiProperty({ description: 'URL da imagem da subcategoria', example: 'https://exemplo.com/imagem.png', required: false })
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @ApiProperty({ description: 'Descrição da subcategoria', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Subcategoria ativa?', example: true, default: true })
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({ description: 'Data de criação', example: '2024-08-19T19:00:00.000Z' })
  @IsString()
  createdAt: string;

  @ApiProperty({ description: 'Data de atualização', example: '2024-08-19T19:00:00.000Z' })
  @IsString()
  updatedAt: string;
}
