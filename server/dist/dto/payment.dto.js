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
exports.UpdateTossDto = exports.CreateTossDto = exports.UpdateCardDto = exports.CreateCardDto = exports.UpdateAccountDto = exports.CreateAccountDto = exports.UpdatePaymentMethodDto = exports.CreatePaymentMethodDto = exports.PaymentType = exports.UpdateLogoDto = exports.CreateLogoDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateLogoDto {
    logo_id;
    image;
}
exports.CreateLogoDto = CreateLogoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '로고 ID',
        example: 'LOGO0001',
        maxLength: 8,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLogoDto.prototype, "logo_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '로고 이미지 URL',
        example: 'https://example.com/logos/samsung_logo.png',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLogoDto.prototype, "image", void 0);
class UpdateLogoDto {
    image;
}
exports.UpdateLogoDto = UpdateLogoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '로고 이미지 URL',
        example: 'https://example.com/logos/new_samsung_logo.png',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateLogoDto.prototype, "image", void 0);
var PaymentType;
(function (PaymentType) {
    PaymentType["CARD"] = "CARD";
    PaymentType["BANK"] = "BANK";
    PaymentType["MOBILE"] = "MOBILE";
})(PaymentType || (exports.PaymentType = PaymentType = {}));
class CreatePaymentMethodDto {
    method_id;
    logo_id;
    type;
    name;
}
exports.CreatePaymentMethodDto = CreatePaymentMethodDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '결제 수단 ID',
        example: 'METHOD0001',
        maxLength: 10,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePaymentMethodDto.prototype, "method_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '로고 ID',
        example: 'LOGO0001',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePaymentMethodDto.prototype, "logo_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '결제 유형',
        enum: PaymentType,
        example: PaymentType.CARD,
    }),
    (0, class_validator_1.IsEnum)(PaymentType),
    __metadata("design:type", String)
], CreatePaymentMethodDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '결제 수단 이름',
        example: 'VISA 신용카드',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePaymentMethodDto.prototype, "name", void 0);
class UpdatePaymentMethodDto {
    logo_id;
    type;
    name;
}
exports.UpdatePaymentMethodDto = UpdatePaymentMethodDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '로고 ID',
        example: 'LOGO0002',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePaymentMethodDto.prototype, "logo_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '결제 유형',
        enum: PaymentType,
        example: PaymentType.MOBILE,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(PaymentType),
    __metadata("design:type", String)
], UpdatePaymentMethodDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '결제 수단 이름',
        example: '카카오페이',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePaymentMethodDto.prototype, "name", void 0);
class CreateAccountDto {
    account_id;
    user_id;
    company_id;
    number;
    logo_id;
}
exports.CreateAccountDto = CreateAccountDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '계좌 ID',
        example: 'ACC0001',
        maxLength: 10,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAccountDto.prototype, "account_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '사용자 ID',
        example: 1,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateAccountDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '회사 ID',
        example: 'COMP0001',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAccountDto.prototype, "company_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '계좌번호',
        example: '110-123-456789',
        maxLength: 30,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAccountDto.prototype, "number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '로고 ID',
        example: 'LOGO0011',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAccountDto.prototype, "logo_id", void 0);
class UpdateAccountDto {
    company_id;
    number;
    logo_id;
}
exports.UpdateAccountDto = UpdateAccountDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '회사 ID',
        example: 'COMP0002',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAccountDto.prototype, "company_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '계좌번호',
        example: '110-123-456780',
        maxLength: 30,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAccountDto.prototype, "number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '로고 ID',
        example: 'LOGO0012',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAccountDto.prototype, "logo_id", void 0);
class CreateCardDto {
    card_id;
    user_id;
    company_id;
    number;
}
exports.CreateCardDto = CreateCardDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '카드 ID',
        example: 'CARD0001',
        maxLength: 10,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCardDto.prototype, "card_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '사용자 ID',
        example: 1,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateCardDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '회사 ID',
        example: 'COMP0001',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCardDto.prototype, "company_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '카드번호',
        example: '1234-5678-9012-3456',
        maxLength: 30,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCardDto.prototype, "number", void 0);
class UpdateCardDto {
    company_id;
    number;
}
exports.UpdateCardDto = UpdateCardDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '회사 ID',
        example: 'COMP0002',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCardDto.prototype, "company_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '카드번호',
        example: '1234-5678-9012-3457',
        maxLength: 30,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCardDto.prototype, "number", void 0);
class CreateTossDto {
    user_id;
    company_id;
    toss_amount;
}
exports.CreateTossDto = CreateTossDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '사용자 ID',
        example: 1,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateTossDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '회사 ID',
        example: 'COMP0001',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTossDto.prototype, "company_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '토스 금액',
        example: 50000,
        minimum: 0,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateTossDto.prototype, "toss_amount", void 0);
class UpdateTossDto {
    company_id;
    toss_amount;
}
exports.UpdateTossDto = UpdateTossDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '회사 ID',
        example: 'COMP0002',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateTossDto.prototype, "company_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '토스 금액',
        example: 75000,
        minimum: 0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateTossDto.prototype, "toss_amount", void 0);
//# sourceMappingURL=payment.dto.js.map