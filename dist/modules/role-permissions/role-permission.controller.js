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
exports.RolePermissionController = void 0;
const common_1 = require("@nestjs/common");
const role_permission_service_1 = require("./role-permission.service");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
let RolePermissionController = class RolePermissionController {
    constructor(service) {
        this.service = service;
    }
    async create(data) {
        return this.service.create(data);
    }
    async findAll() {
        return this.service.findAll();
    }
    async findOne(roleId, permissionId) {
        return this.service.findOne(roleId, permissionId);
    }
    async remove(roleId, permissionId) {
        return this.service.remove(roleId, permissionId);
    }
};
exports.RolePermissionController = RolePermissionController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Conceder permissão a um papel' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RolePermissionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todas as permissões de papéis' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RolePermissionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':roleId/:permissionId'),
    (0, swagger_1.ApiOperation)({ summary: 'Obter permissão específica de um papel' }),
    __param(0, (0, common_1.Param)('roleId')),
    __param(1, (0, common_1.Param)('permissionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], RolePermissionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':roleId/:permissionId'),
    (0, swagger_1.ApiOperation)({ summary: 'Revogar permissão de um papel' }),
    __param(0, (0, common_1.Param)('roleId')),
    __param(1, (0, common_1.Param)('permissionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], RolePermissionController.prototype, "remove", null);
exports.RolePermissionController = RolePermissionController = __decorate([
    (0, swagger_1.ApiTags)('RolePermissions'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.Controller)('role-permissions'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [role_permission_service_1.RolePermissionService])
], RolePermissionController);
//# sourceMappingURL=role-permission.controller.js.map