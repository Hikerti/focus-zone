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
exports.RegisterDto = void 0;
const class_validator_1 = require("class-validator");
class RegisterDto {
    email;
    password;
    adress;
    phone;
    name;
    surname;
    login;
    description;
}
exports.RegisterDto = RegisterDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Поле является обязательным' }),
    (0, class_validator_1.IsString)({ message: "Почта должна быть в формате строки" }),
    (0, class_validator_1.IsEmail)({}, { message: "Введите запрос в формате email" }),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Поле является обязательным' }),
    (0, class_validator_1.IsString)({ message: "Пароль должн быть в формате строки" }),
    (0, class_validator_1.MinLength)(8, { message: "Пароль должен содержать минимум 8 симвалов" }),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Пароль должн быть в формате строки" }),
    __metadata("design:type", String)
], RegisterDto.prototype, "adress", void 0);
__decorate([
    (0, class_validator_1.Matches)(/^\+?\d{10,15}$/),
    (0, class_validator_1.IsString)({ message: "Пароль должн быть в формате строки" }),
    __metadata("design:type", String)
], RegisterDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Поле является обязательным' }),
    (0, class_validator_1.IsString)({ message: "Пароль должн быть в формате строки" }),
    __metadata("design:type", String)
], RegisterDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Поле является обязательным' }),
    (0, class_validator_1.IsString)({ message: "Пароль должн быть в формате строки" }),
    __metadata("design:type", String)
], RegisterDto.prototype, "surname", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Поле является обязательным' }),
    (0, class_validator_1.IsString)({ message: "Пароль должн быть в формате строки" }),
    __metadata("design:type", String)
], RegisterDto.prototype, "login", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(200, { message: 'Описание не может быть длиннее 200 симвалов' }),
    (0, class_validator_1.IsString)({ message: "Пароль должн быть в формате строки" }),
    __metadata("design:type", String)
], RegisterDto.prototype, "description", void 0);
//# sourceMappingURL=register.dto.js.map