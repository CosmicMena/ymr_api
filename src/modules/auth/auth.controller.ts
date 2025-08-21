import { Controller, Post, Body, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { LoginDto, RegisterDto, RefreshTokenDto } from './dto/auth.dto';
import { Public } from '../../common/decorators/public.decorator';
import { SuccessResponseDto } from '../../common/dto/response.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ 
    summary: 'User login',
    description: 'Authenticate user with email and password. Returns access token and refresh token.'
  })
  @ApiBody({ type: LoginDto })
  @ApiResponse({ 
    status: 200, 
    description: 'Login successful',
    type: SuccessResponseDto,
    schema: {
      example: {
        success: true,
        message: 'Login successful',
        data: {
          user: {
            id: 'uuid',
            email: 'user@example.com',
            name: 'John Doe',
            userType: 'user'
          },
          tokens: {
            accessToken: 'jwt_token',
            refreshToken: 'refresh_token',
            expiresIn: '1h'
          }
        }
      }
    }
  })
  @ApiResponse({ status: 401, description: 'Invalid credentials' })
  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto) {
    const result = await this.authService.login(loginDto);
    return new SuccessResponseDto('Login successful', result);
  }

  @ApiOperation({ 
    summary: 'User registration',
    description: 'Register a new user account. Creates user profile and returns authentication tokens.'
  })
  @ApiBody({ type: RegisterDto })
  @ApiResponse({ 
    status: 201, 
    description: 'Registration successful',
    type: SuccessResponseDto 
  })
  @ApiResponse({ status: 409, description: 'User already exists' })
  @Public()
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    const result = await this.authService.register(registerDto);
    return new SuccessResponseDto('Registration successful', result);
  }

  @ApiOperation({ 
    summary: 'Refresh access token',
    description: 'Generate new access token using refresh token.'
  })
  @ApiBody({ type: RefreshTokenDto })
  @ApiResponse({ 
    status: 200, 
    description: 'Token refreshed successfully',
    type: SuccessResponseDto 
  })
  @ApiResponse({ status: 401, description: 'Invalid refresh token' })
  @Public()
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refreshToken(@Body() refreshTokenDto: RefreshTokenDto) {
    const result = await this.authService.refreshToken(refreshTokenDto);
    return new SuccessResponseDto('Token refreshed successfully', result);
  }
}