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
exports.MessageController = void 0;
const common_1 = require("@nestjs/common");
const message_service_1 = require("./message.service");
const CreateMessage_dto_1 = require("./dto/CreateMessage.dto");
const UpdateMessage_dto_1 = require("./dto/UpdateMessage.dto");
let MessageController = class MessageController {
    messageService;
    constructor(messageService) {
        this.messageService = messageService;
    }
    getUserMessage(userId) {
        return this.messageService.getUserMessage(userId);
    }
    getCafeMessage(cafeId) {
        return this.messageService.getCafeMessage(Number(cafeId));
    }
    getIdMessage(id) {
        return this.messageService.getIdMessage(Number(id));
    }
    createMessage(dto) {
        return this.messageService.createMessage(dto);
    }
    updateMessage(id, dto) {
        return this.messageService.updateMessage(Number(id), dto);
    }
    deleteMessage(id) {
        return this.messageService.deleteMessage(Number(id));
    }
};
exports.MessageController = MessageController;
__decorate([
    (0, common_1.Get)('get_user_messages/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "getUserMessage", null);
__decorate([
    (0, common_1.Get)('get_cafe_messages/:cafeId'),
    __param(0, (0, common_1.Param)('cafeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "getCafeMessage", null);
__decorate([
    (0, common_1.Get)('get_id_messages/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "getIdMessage", null);
__decorate([
    (0, common_1.Post)('create_messages'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateMessage_dto_1.CreateMessageDto]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "createMessage", null);
__decorate([
    (0, common_1.Put)('update_messages/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateMessage_dto_1.UpdateMessageDto]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "updateMessage", null);
__decorate([
    (0, common_1.Delete)('delete_messages/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "deleteMessage", null);
exports.MessageController = MessageController = __decorate([
    (0, common_1.Controller)('message'),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], MessageController);
//# sourceMappingURL=message.controller.js.map