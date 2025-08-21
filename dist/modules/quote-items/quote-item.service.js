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
exports.QuoteItemService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let QuoteItemService = class QuoteItemService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.quoteItem.create({ data });
    }
    async findAll() {
        return this.prisma.quoteItem.findMany({
            orderBy: { createdAt: 'asc' },
            include: { product: true, quoteRequest: true },
        });
    }
    async findOne(id) {
        const item = await this.prisma.quoteItem.findUnique({
            where: { id },
            include: { product: true, quoteRequest: true },
        });
        if (!item)
            throw new common_1.NotFoundException(`Item de orçamento com ID ${id} não encontrado`);
        return item;
    }
    async update(id, data) {
        return this.prisma.quoteItem.update({ where: { id }, data });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.quoteItem.delete({ where: { id } });
    }
};
exports.QuoteItemService = QuoteItemService;
exports.QuoteItemService = QuoteItemService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], QuoteItemService);
//# sourceMappingURL=quote-item.service.js.map