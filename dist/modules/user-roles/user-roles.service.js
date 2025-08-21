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
exports.UserRolesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let UserRolesService = class UserRolesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.userRole.create({ data });
    }
    async findAll() {
        return this.prisma.userRole.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const role = await this.prisma.userRole.findUnique({ where: { id } });
        if (!role)
            throw new common_1.NotFoundException('Papel não encontrado');
        return role;
    }
    async update(id, data) {
        await this.findOne(id);
        return this.prisma.userRole.update({ where: { id }, data });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.userRole.delete({ where: { id } });
    }
};
exports.UserRolesService = UserRolesService;
exports.UserRolesService = UserRolesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserRolesService);
//# sourceMappingURL=user-roles.service.js.map