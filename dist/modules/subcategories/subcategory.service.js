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
exports.SubcategoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let SubcategoryService = class SubcategoryService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.subcategory.create({ data });
    }
    async findAll() {
        return this.prisma.subcategory.findMany({
            orderBy: { name: 'asc' },
            include: { category: true },
        });
    }
    async findOne(id) {
        const subcategory = await this.prisma.subcategory.findUnique({
            where: { id },
            include: { category: true },
        });
        if (!subcategory)
            throw new common_1.NotFoundException(`Subcategoria não encontrada`);
        return subcategory;
    }
    async update(id, data) {
        await this.findOne(id);
        return this.prisma.subcategory.update({ where: { id }, data });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.subcategory.delete({ where: { id } });
    }
};
exports.SubcategoryService = SubcategoryService;
exports.SubcategoryService = SubcategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SubcategoryService);
//# sourceMappingURL=subcategory.service.js.map