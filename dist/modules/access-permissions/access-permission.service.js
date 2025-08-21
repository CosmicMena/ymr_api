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
exports.AccessPermissionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let AccessPermissionService = class AccessPermissionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.accessPermission.create({
            data,
        });
    }
    async findAll() {
        return this.prisma.accessPermission.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const permission = await this.prisma.accessPermission.findUnique({
            where: { id },
        });
        if (!permission) {
            throw new common_1.NotFoundException(`Permissão com ID ${id} não encontrada`);
        }
        return permission;
    }
    async update(id, data) {
        return this.prisma.accessPermission.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.accessPermission.delete({
            where: { id },
        });
    }
};
exports.AccessPermissionService = AccessPermissionService;
exports.AccessPermissionService = AccessPermissionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AccessPermissionService);
//# sourceMappingURL=access-permission.service.js.map