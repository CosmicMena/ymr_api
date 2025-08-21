import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean, IsUUID, IsEmail, IsDateString } from 'class-validator';

export class UserDto {
  @ApiProperty({ description: 'ID do usuário', example: 'uuid' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Nome do usuário', example: 'João Silva' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'E-mail do usuário', example: 'joao@email.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Telefone do usuário', example: '+244 912 345 678', required: false })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ description: 'Data de nascimento', example: '1990-01-01', required: false })
  @IsOptional()
  @IsDateString()
  birthDate?: string;

  @ApiProperty({ description: 'Endereço', required: false })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({ description: 'Cidade', example: 'Luanda', required: false })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiProperty({ description: 'País', example: 'Angola', default: 'Angola' })
  @IsString()
  country: string;

  @ApiProperty({ description: 'Empresa', example: 'Tech Solutions Ltd', required: false })
  @IsOptional()
  @IsString()
  company?: string;

  @ApiProperty({ description: 'Cargo', example: 'Gerente', required: false })
  @IsOptional()
  @IsString()
  position?: string;

  @ApiProperty({ description: 'URL do avatar', example: 'https://exemplo.com/avatar.png', required: false })
  @IsOptional()
  @IsString()
  avatarUrl?: string;

  @ApiProperty({ description: 'Hash da senha', required: false })
  @IsOptional()
  @IsString()
  passwordHash?: string;

  @ApiProperty({ description: 'ID do Google', required: false })
  @IsOptional()
  @IsString()
  googleId?: string;

  @ApiProperty({ description: 'E-mail verificado?', example: false, default: false })
  @IsBoolean()
  emailVerified: boolean;

  @ApiProperty({ description: 'Usuário ativo?', example: true, default: true })
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({ description: 'Método de contato preferido', example: 'email', default: 'email' })
  @IsString()
  preferredContactMethod: string;

  @ApiProperty({ description: 'Data de criação', example: '2024-08-19T19:00:00.000Z' })
  @IsString()
  createdAt: string;

  @ApiProperty({ description: 'Data de atualização', example: '2024-08-19T19:00:00.000Z' })
  @IsString()
  updatedAt: string;

  @ApiProperty({ description: 'Último login', example: '2024-08-19T19:00:00.000Z', required: false })
  @IsOptional()
  @IsString()
  lastLogin?: string;
}
