import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class UserStatisticsDto {
  @ApiProperty({ description: 'ID das estatísticas', example: 'uuid' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'ID do usuário', example: 'uuid' })
  @IsUUID()
  userId: string;

  @ApiProperty({ description: 'Total de pedidos', example: 5 })
  @IsInt()
  ordersCount: number;

  @ApiProperty({ description: 'Total de consultas', example: 2 })
  @IsInt()
  consultationsCount: number;

  @ApiProperty({ description: 'Total de alugueis', example: 1 })
  @IsInt()
  rentalsCount: number;

  @ApiProperty({ description: 'Pontos de fidelidade', example: 100 })
  @IsInt()
  loyaltyPoints: number;

  @ApiProperty({ description: 'Total gasto', example: 15000.00 })
  @IsNumber()
  totalSpent: number;

  @ApiProperty({ description: 'Data da última atividade', example: '2024-08-19T19:00:00.000Z', required: false })
  @IsOptional()
  @IsString()
  lastActivity?: string;

  @ApiProperty({ description: 'Data de criação', example: '2024-08-19T19:00:00.000Z' })
  @IsString()
  createdAt: string;

  @ApiProperty({ description: 'Data de atualização', example: '2024-08-19T19:00:00.000Z' })
  @IsString()
  updatedAt: string;
}
