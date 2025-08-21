import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsString } from 'class-validator';

export class RolePermissionDto {
  @ApiProperty({ description: 'ID do papel', example: 'uuid' })
  @IsUUID()
  roleId: string;

  @ApiProperty({ description: 'ID da permissão', example: 'uuid' })
  @IsUUID()
  permissionId: string;

  @ApiProperty({ description: 'Data de concessão', example: '2024-08-19T19:00:00.000Z' })
  @IsString()
  grantedAt: string;
}
