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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCartService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let ShoppingCartService = class ShoppingCartService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.shoppingCart.create({ data });
    }
    async findAll() {
        return this.prisma.shoppingCart.findMany({
            include: { user: true, product: true },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const cart = await this.prisma.shoppingCart.findUnique({
            where: { id },
            include: { user: true, product: true },
        });
        if (!cart)
            throw new common_1.NotFoundException(`Carrinho não encontrado`);
        return cart;
    }
    async update(id, data) {
        await this.findOne(id);
        return this.prisma.shoppingCart.update({ where: { id }, data });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.shoppingCart.delete({ where: { id } });
    }
};
exports.ShoppingCartService = ShoppingCartService;
exports.ShoppingCartService = ShoppingCartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ShoppingCartService);
//# sourceMappingURL=shopping-cart.service.js.map