import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsUUID, IsNumber, IsInt } from 'class-validator';

export class SiteVisitDto {
  @ApiProperty({ description: 'ID da visita', example: 'uuid' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Endereço IP', example: '192.168.0.1' })
  @IsString()
  ipAddress: string;

  @ApiProperty({ description: 'User Agent', required: false })
  @IsOptional()
  @IsString()
  userAgent?: string;

  @ApiProperty({ description: 'Referer', required: false })
  @IsOptional()
  @IsString()
  referer?: string;

  @ApiProperty({ description: 'URL da página', required: false })
  @IsOptional()
  @IsString()
  pageUrl?: string;

  @ApiProperty({ description: 'País', example: 'AO', required: false })
  @IsOptional()
  @IsString()
  country?: string;

  @ApiProperty({ description: 'Região', required: false })
  @IsOptional()
  @IsString()
  region?: string;

  @ApiProperty({ description: 'Cidade', required: false })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiProperty({ description: 'Latitude', example: -8.839987, required: false })
  @IsOptional()
  @IsNumber()
  latitude?: number;

  @ApiProperty({ description: 'Longitude', example: 13.289437, required: false })
  @IsOptional()
  @IsNumber()
  longitude?: number;

  @ApiProperty({ description: 'ID da sessão', required: false })
  @IsOptional()
  @IsString()
  sessionId?: string;

  @ApiProperty({ description: 'ID do usuário', example: 'uuid', required: false })
  @IsOptional()
  @IsUUID()
  userId?: string;

  @ApiProperty({ description: 'Duração da visita (segundos)', example: 120, required: false })
  @IsOptional()
  @IsInt()
  visitDuration?: number;

  @ApiProperty({ description: 'Data de criação', example: '2024-08-19T19:00:00.000Z' })
  @IsString()
  createdAt: string;
}
