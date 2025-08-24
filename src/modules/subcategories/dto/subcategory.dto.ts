import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean, IsUUID, MaxLength } from 'class-validator';

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

export class CreateSubcategoryDto extends OmitType(SubcategoryDto, ['id', 'createdAt', 'updatedAt'] as const) {}

export class UpdateSubcategoryDto extends PartialType(CreateSubcategoryDto) {}

export class SubcategoryFilterDto {
  @ApiProperty({ description: 'Buscar por nome (contém, case-insensitive)', required: false, example: 'gera' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  search?: string;

  @ApiProperty({ description: 'Filtrar por categoria', required: false, example: 'uuid-categoria' })
  @IsOptional()
  @IsUUID()
  categoryId?: string;

  @ApiProperty({ description: 'Filtrar por ativo', required: false, example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
