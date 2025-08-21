"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const products_service_1 = require("./products.service");
const product_dto_1 = require("./dto/product.dto");
const pagination_dto_1 = require("../../common/dto/pagination.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const public_decorator_1 = require("../../common/decorators/public.decorator");
const response_dto_1 = require("../../common/dto/response.dto");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async create(createProductDto) {
        const product = await this.productsService.create(createProductDto);
        return new response_dto_1.SuccessResponseDto('Product created successfully', product);
    }
    async findAll(paginationDto, filterDto) {
        const result = await this.productsService.findAll(paginationDto, filterDto);
        return new response_dto_1.SuccessResponseDto('Products retrieved successfully', result);
    }
    async getPopularProducts(limit) {
        const products = await this.productsService.getPopularProducts(limit);
        return new response_dto_1.SuccessResponseDto('Popular products retrieved successfully', products);
    }
    async getFeaturedProducts(limit) {
        const products = await this.productsService.getFeaturedProducts(limit);
        return new response_dto_1.SuccessResponseDto('Featured products retrieved successfully', products);
    }
    async findOne(id) {
        const product = await this.productsService.findOne(id);
        return new response_dto_1.SuccessResponseDto('Product retrieved successfully', product);
    }
    async update(id, updateProductDto) {
        const product = await this.productsService.update(id, updateProductDto);
        return new response_dto_1.SuccessResponseDto('Product updated successfully', product);
    }
    async remove(id) {
        await this.productsService.remove(id);
        return new response_dto_1.SuccessResponseDto('Product deleted successfully');
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Create new product',
        description: 'Create a new product with specifications and images. Admin only.'
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Product created successfully', type: response_dto_1.SuccessResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Product code already exists' }),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, roles_decorator_1.Roles)('products.create'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get all products',
        description: 'Get paginated list of products with optional filters and search.'
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, description: 'Page number' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, description: 'Items per page' }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false, description: 'Search term' }),
    (0, swagger_1.ApiQuery)({ name: 'brandId', required: false, description: 'Filter by brand ID' }),
    (0, swagger_1.ApiQuery)({ name: 'subcategoryId', required: false, description: 'Filter by subcategory ID' }),
    (0, swagger_1.ApiQuery)({ name: 'categoryId', required: false, description: 'Filter by category ID' }),
    (0, swagger_1.ApiQuery)({ name: 'minPrice', required: false, description: 'Minimum price filter' }),
    (0, swagger_1.ApiQuery)({ name: 'maxPrice', required: false, description: 'Maximum price filter' }),
    (0, swagger_1.ApiQuery)({ name: 'isActive', required: false, description: 'Filter by active status' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Products retrieved successfully' }),
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto,
        product_dto_1.ProductFilterDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get popular products',
        description: 'Get most viewed products.'
    }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, description: 'Number of products to return' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Popular products retrieved successfully' }),
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('popular'),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getPopularProducts", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get featured products',
        description: 'Get featured/newest products.'
    }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, description: 'Number of products to return' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Featured products retrieved successfully' }),
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('featured'),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getFeaturedProducts", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get single product',
        description: 'Get detailed information about a specific product.'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Product retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Product not found' }),
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Update product',
        description: 'Update product information. Admin only.'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Product updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Product not found' }),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, roles_decorator_1.Roles)('products.update'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Delete product',
        description: 'Delete a product. Admin only.'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Product deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Product not found' }),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, roles_decorator_1.Roles)('products.delete'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "remove", null);
exports.ProductsController = ProductsController = __decorate([
    (0, swagger_1.ApiTags)('Products'),
    (0, common_1.Controller)('products'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map