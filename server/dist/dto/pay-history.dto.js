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
exports.CreatePayHistoryDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreatePayHistoryDto {
    user_id;
    store_id;
    method_id;
    amount;
}
exports.CreatePayHistoryDto = CreatePayHistoryDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '사용자 ID (숫자)',
        example: 1,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreatePayHistoryDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '매장 ID (숫자)',
        example: 1,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreatePayHistoryDto.prototype, "store_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '결제 수단 ID',
        example: 'METHOD0001',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePayHistoryDto.prototype, "method_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '금액 (포인트 적립: 양수, 포인트 사용: 양수로 입력하면 자동으로 음수 처리)',
        example: 1000,
        minimum: 1,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreatePayHistoryDto.prototype, "amount", void 0);
//# sourceMappingURL=pay-history.dto.js.map