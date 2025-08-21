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
exports.QuoteRequestService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let QuoteRequestService = class QuoteRequestService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.quoteRequest.create({ data });
    }
    async findAll() {
        return this.prisma.quoteRequest.findMany({
            orderBy: { createdAt: 'asc' },
            include: { user: true, status: true, quoteItems: true },
        });
    }
    async findOne(id) {
        const request = await this.prisma.quoteRequest.findUnique({
            where: { id },
            include: { user: true, status: true, quoteItems: true },
        });
        if (!request)
            throw new common_1.NotFoundException(`Solicitação de orçamento com ID ${id} não encontrada`);
        return request;
    }
    async update(id, data) {
        return this.prisma.quoteRequest.update({ where: { id }, data });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.quoteRequest.delete({ where: { id } });
    }
};
exports.QuoteRequestService = QuoteRequestService;
exports.QuoteRequestService = QuoteRequestService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], QuoteRequestService);
//# sourceMappingURL=quote-request.service.js.map