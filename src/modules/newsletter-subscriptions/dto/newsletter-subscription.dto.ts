import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean, IsUUID, IsEmail } from 'class-validator';

export class NewsletterSubscriptionDto {
  @ApiProperty({ description: 'ID da inscrição', example: 'uuid' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'E-mail', example: 'usuario@email.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Nome', example: 'João', required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ description: 'Inscrição ativa?', example: true, default: true })
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({ description: 'Interesses', example: ['produtos', 'novidades'] })
  interests: string[];

  @ApiProperty({ description: 'Data de inscrição', example: '2024-08-19T19:00:00.000Z' })
  @IsString()
  subscribedAt: string;

  @ApiProperty({ description: 'Data de cancelamento', example: '2024-09-01T19:00:00.000Z', required: false })
  @IsOptional()
  @IsString()
  unsubscribedAt?: string;
}
