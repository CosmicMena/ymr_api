import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsUUID } from 'class-validator';

export class MessageThreadDto {
  @ApiProperty({ description: 'ID do tópico de mensagem', example: 'uuid' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Assunto', example: 'Dúvida sobre produto' })
  @IsString()
  subject: string;

  @ApiProperty({ description: 'ID do usuário', example: 'uuid', required: false })
  @IsOptional()
  @IsUUID()
  userId?: string;

  @ApiProperty({ description: 'ID do admin', example: 'uuid', required: false })
  @IsOptional()
  @IsUUID()
  adminId?: string;

  @ApiProperty({ description: 'Status do tópico', example: 'open', default: 'open' })
  @IsString()
  status: string;

  @ApiProperty({ description: 'Prioridade', example: 'normal', default: 'normal' })
  @IsString()
  priority: string;

  @ApiProperty({ description: 'Data de criação', example: '2024-08-19T19:00:00.000Z' })
  @IsString()
  createdAt: string;

  @ApiProperty({ description: 'Data de atualização', example: '2024-08-19T19:00:00.000Z' })
  @IsString()
  updatedAt: string;
}
