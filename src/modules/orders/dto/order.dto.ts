import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsUUID, IsNumber } from 'class-validator';

export class OrderDto {
  @ApiProperty({ description: 'ID do pedido', example: 'uuid' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Código do pedido', example: 'ORD-2024-001' })
  @IsString()
  code: string;

  @ApiProperty({ description: 'ID do usuário', example: 'uuid' })
  @IsUUID()
  userId: string;

  @ApiProperty({ description: 'ID do status', example: 'uuid' })
  @IsUUID()
  statusId: string;

  @ApiProperty({ description: 'Tipo de serviço', example: 'Venda', required: false })
  @IsOptional()
  @IsString()
  serviceType?: string;

  @ApiProperty({ description: 'Valor total', example: 10000.00, required: false })
  @IsOptional()
  @IsNumber()
  totalAmount?: number;

  @ApiProperty({ description: 'Moeda', example: 'AOA', default: 'AOA' })
  @IsString()
  currency: string;

  @ApiProperty({ description: 'Notas', required: false })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({ description: 'Endereço de entrega', required: false })
  @IsOptional()
  @IsString()
  deliveryAddress?: string;

  @ApiProperty({ description: 'Data de entrega', example: '2024-09-01', required: false })
  @IsOptional()
  @IsString()
  deliveryDate?: string;

  @ApiProperty({ description: 'Data de criação', example: '2024-08-19T19:00:00.000Z' })
  @IsString()
  createdAt: string;

  @ApiProperty({ description: 'Data de atualização', example: '2024-08-19T19:00:00.000Z' })
  @IsString()
  updatedAt: string;
}
