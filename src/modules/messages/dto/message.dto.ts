import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsUUID, IsBoolean } from 'class-validator';

export class MessageDto {
  @ApiProperty({ description: 'ID da mensagem', example: 'uuid' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'ID do tópico', example: 'uuid' })
  @IsUUID()
  threadId: string;

  @ApiProperty({ description: 'Tipo de remetente', example: 'user' })
  @IsString()
  senderType: string;

  @ApiProperty({ description: 'ID do remetente', example: 'uuid' })
  @IsUUID()
  senderId: string;

  @ApiProperty({ description: 'Conteúdo da mensagem' })
  @IsString()
  content: string;

  @ApiProperty({ description: 'Anexos (JSON)', required: false })
  @IsOptional()
  attachments?: any;

  @ApiProperty({ description: 'Mensagem lida?', example: false, default: false })
  @IsBoolean()
  isRead: boolean;

  @ApiProperty({ description: 'Data de criação', example: '2024-08-19T19:00:00.000Z' })
  @IsString()
  createdAt: string;
}
