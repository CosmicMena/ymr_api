import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsUUID, IsInt, IsNumber } from 'class-validator';

export class QuoteItemDto {
  @ApiProperty({ description: 'ID do item do orçamento', example: 'uuid' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'ID da solicitação de orçamento', example: 'uuid' })
  @IsUUID()
  quoteRequestId: string;

  @ApiProperty({ description: 'ID do produto', example: 'uuid' })
  @IsUUID()
  productId: string;

  @ApiProperty({ description: 'Quantidade', example: 2 })
  @IsInt()
  quantity: number;

  @ApiProperty({ description: 'Preço unitário', example: 1000.00, required: false })
  @IsOptional()
  @IsNumber()
  unitPrice?: number;

  @ApiProperty({ description: 'Preço total', example: 2000.00, required: false })
  @IsOptional()
  @IsNumber()
  totalPrice?: number;

  @ApiProperty({ description: 'Notas', required: false })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({ description: 'Data de criação', example: '2024-08-19T19:00:00.000Z' })
  @IsString()
  createdAt: string;
}
