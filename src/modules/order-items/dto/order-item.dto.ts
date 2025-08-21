import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsUUID, IsInt, IsNumber } from 'class-validator';

export class OrderItemDto {
  @ApiProperty({ description: 'ID do item do pedido', example: 'uuid' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'ID do pedido', example: 'uuid' })
  @IsUUID()
  orderId: string;

  @ApiProperty({ description: 'ID do produto', example: 'uuid', required: false })
  @IsOptional()
  @IsUUID()
  productId?: string;

  @ApiProperty({ description: 'Descrição do serviço', required: false })
  @IsOptional()
  @IsString()
  serviceDescription?: string;

  @ApiProperty({ description: 'Quantidade', example: 1 })
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

  @ApiProperty({ description: 'Data de criação', example: '2024-08-19T19:00:00.000Z' })
  @IsString()
  createdAt: string;
}
