import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class UserFavoriteDto {
  @ApiProperty({ description: 'ID do favorito', example: 'uuid' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'ID do usuário', example: 'uuid' })
  @IsUUID()
  userId: string;

  @ApiProperty({ description: 'ID do produto', example: 'uuid' })
  @IsUUID()
  productId: string;

  @ApiProperty({ description: 'Data de criação', example: '2024-08-19T19:00:00.000Z' })
  createdAt: string;
}
