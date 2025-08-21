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
exports.UserActivityService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let UserActivityService = class UserActivityService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.userActivity.create({ data });
    }
    async findAll() {
        return this.prisma.userActivity.findMany({
            orderBy: { createdAt: 'desc' },
            include: { user: true },
        });
    }
    async findOne(id) {
        const activity = await this.prisma.userActivity.findUnique({
            where: { id },
            include: { user: true },
        });
        if (!activity)
            throw new common_1.NotFoundException('Atividade não encontrada');
        return activity;
    }
    async update(id, data) {
        await this.findOne(id);
        return this.prisma.userActivity.update({ where: { id }, data });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.userActivity.delete({ where: { id } });
    }
};
exports.UserActivityService = UserActivityService;
exports.UserActivityService = UserActivityService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserActivityService);
//# sourceMappingURL=user-activity.service.js.map