import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean, IsUUID } from 'class-validator';

export class CategoryDto {
  @ApiProperty({ description: 'ID da categoria', example: 'uuid' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Nome da categoria', example: 'Geradores' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'URL da imagem da categoria', example: 'https://exemplo.com/imagem.png', required: false })
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @ApiProperty({ description: 'Descrição da categoria', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Categoria ativa?', example: true, default: true })
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({ description: 'Data de criação', example: '2024-08-19T19:00:00.000Z' })
  @IsString()
  createdAt: string;

  @ApiProperty({ description: 'Data de atualização', example: '2024-08-19T19:00:00.000Z' })
  @IsString()
  updatedAt: string;
}
