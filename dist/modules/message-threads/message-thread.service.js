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
exports.MessageThreadService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let MessageThreadService = class MessageThreadService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.messageThread.create({ data });
    }
    async findAll() {
        return this.prisma.messageThread.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const thread = await this.prisma.messageThread.findUnique({ where: { id } });
        if (!thread)
            throw new common_1.NotFoundException(`Thread com ID ${id} não encontrado`);
        return thread;
    }
    async update(id, data) {
        return this.prisma.messageThread.update({ where: { id }, data });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.messageThread.delete({ where: { id } });
    }
};
exports.MessageThreadService = MessageThreadService;
exports.MessageThreadService = MessageThreadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MessageThreadService);
//# sourceMappingURL=message-thread.service.js.map