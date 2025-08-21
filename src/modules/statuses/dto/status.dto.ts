import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean, IsUUID } from 'class-validator';

export class StatusDto {
  @ApiProperty({ description: 'ID do status', example: 'uuid' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Nome do status', example: 'Pendente' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Descrição do status', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Cor do status (hex)', example: '#FF0000', required: false })
  @IsOptional()
  @IsString()
  color?: string;

  @ApiProperty({ description: 'Status ativo?', example: true, default: true })
  @IsBoolean()
  isActive: boolean;
}
