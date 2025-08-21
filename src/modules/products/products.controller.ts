import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto, ProductFilterDto } from './dto/product.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Public } from '../../common/decorators/public.decorator';
import { SuccessResponseDto } from '../../common/dto/response.dto';

@ApiTags('Products')
@Controller('products')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({ 
    summary: 'Create new product',
    description: 'Create a new product with specifications and images. Admin only.'
  })
  @ApiResponse({ status: 201, description: 'Product created successfully', type: SuccessResponseDto })
  @ApiResponse({ status: 409, description: 'Product code already exists' })
  @ApiBearerAuth('JWT-auth')
  @Roles('products.create')
  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    const product = await this.productsService.create(createProductDto);
    return new SuccessResponseDto('Product created successfully', product);
  }

  @ApiOperation({ 
    summary: 'Get all products',
    description: 'Get paginated list of products with optional filters and search.'
  })
  @ApiQuery({ name: 'page', required: false, description: 'Page number' })
  @ApiQuery({ name: 'limit', required: false, description: 'Items per page' })
  @ApiQuery({ name: 'search', required: false, description: 'Search term' })
  @ApiQuery({ name: 'brandId', required: false, description: 'Filter by brand ID' })
  @ApiQuery({ name: 'subcategoryId', required: false, description: 'Filter by subcategory ID' })
  @ApiQuery({ name: 'categoryId', required: false, description: 'Filter by category ID' })
  @ApiQuery({ name: 'minPrice', required: false, description: 'Minimum price filter' })
  @ApiQuery({ name: 'maxPrice', required: false, description: 'Maximum price filter' })
  @ApiQuery({ name: 'isActive', required: false, description: 'Filter by active status' })
  @ApiResponse({ status: 200, description: 'Products retrieved successfully' })
  @Public()
  @Get()
  async findAll(
    @Query() paginationDto: PaginationDto,
    @Query() filterDto: ProductFilterDto,
  ) {
    const result = await this.productsService.findAll(paginationDto, filterDto);
    return new SuccessResponseDto('Products retrieved successfully', result);
  }

  @ApiOperation({ 
    summary: 'Get popular products',
    description: 'Get most viewed products.'
  })
  @ApiQuery({ name: 'limit', required: false, description: 'Number of products to return' })
  @ApiResponse({ status: 200, description: 'Popular products retrieved successfully' })
  @Public()
  @Get('popular')
  async getPopularProducts(@Query('limit') limit?: number) {
    const products = await this.productsService.getPopularProducts(limit);
    return new SuccessResponseDto('Popular products retrieved successfully', products);
  }

  @ApiOperation({ 
    summary: 'Get featured products',
    description: 'Get featured/newest products.'
  })
  @ApiQuery({ name: 'limit', required: false, description: 'Number of products to return' })
  @ApiResponse({ status: 200, description: 'Featured products retrieved successfully' })
  @Public()
  @Get('featured')
  async getFeaturedProducts(@Query('limit') limit?: number) {
    const products = await this.productsService.getFeaturedProducts(limit);
    return new SuccessResponseDto('Featured products retrieved successfully', products);
  }

  @ApiOperation({ 
    summary: 'Get single product',
    description: 'Get detailed information about a specific product.'
  })
  @ApiResponse({ status: 200, description: 'Product retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Product not found' })
  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const product = await this.productsService.findOne(id);
    return new SuccessResponseDto('Product retrieved successfully', product);
  }

  @ApiOperation({ 
    summary: 'Update product',
    description: 'Update product information. Admin only.'
  })
  @ApiResponse({ status: 200, description: 'Product updated successfully' })
  @ApiResponse({ status: 404, description: 'Product not found' })
  @ApiBearerAuth('JWT-auth')
  @Roles('products.update')
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    const product = await this.productsService.update(id, updateProductDto);
    return new SuccessResponseDto('Product updated successfully', product);
  }

  @ApiOperation({ 
    summary: 'Delete product',
    description: 'Delete a product. Admin only.'
  })
  @ApiResponse({ status: 200, description: 'Product deleted successfully' })
  @ApiResponse({ status: 404, description: 'Product not found' })
  @ApiBearerAuth('JWT-auth')
  @Roles('products.delete')
  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.productsService.remove(id);
    return new SuccessResponseDto('Product deleted successfully');
  }
}