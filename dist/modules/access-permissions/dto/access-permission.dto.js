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
exports.UpdateAccessPermissionDto = exports.CreateAccessPermissionDto = exports.AccessPermissionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class AccessPermissionDto {
}
exports.AccessPermissionDto = AccessPermissionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID da permissão', example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AccessPermissionDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nome da permissão', example: 'Editar Produto' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AccessPermissionDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Recurso relacionado à permissão', example: 'Product' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AccessPermissionDto.prototype, "resource", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Ação permitida', example: 'edit' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AccessPermissionDto.prototype, "action", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Descrição da permissão', required: false, example: 'Permite editar informações de produtos' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AccessPermissionDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Data de criação da permissão', example: '2024-08-19T19:00:00.000Z' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AccessPermissionDto.prototype, "createdAt", void 0);
class CreateAccessPermissionDto extends (0, swagger_1.OmitType)(AccessPermissionDto, ['id', 'createdAt']) {
}
exports.CreateAccessPermissionDto = CreateAccessPermissionDto;
class UpdateAccessPermissionDto extends (0, swagger_1.PartialType)(CreateAccessPermissionDto) {
}
exports.UpdateAccessPermissionDto = UpdateAccessPermissionDto;
//# sourceMappingURL=access-permission.dto.js.map