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
exports.PlacesController = void 0;
const common_1 = require("@nestjs/common");
const places_service_1 = require("./places.service");
const CreatePlaces_dto_1 = require("./dto/CreatePlaces.dto");
const UpdatePlaces_dto_1 = require("./dto/UpdatePlaces.dto");
let PlacesController = class PlacesController {
    placesService;
    constructor(placesService) {
        this.placesService = placesService;
    }
    getPlaces() {
        return this.placesService.getPlaces();
    }
    getPlacesById(id) {
        return this.placesService.getPlacesById(Number(id));
    }
    filterPlaces(filter, page, limit) {
        return this.placesService.filterPlaces(filter, Number(limit), Number(page));
    }
    getPlacesLimit(limit, page) {
        return this.placesService.getPlacesLimit(limit, page);
    }
    getPlacesLength(dto) {
        return this.placesService.getPlacesLength(dto);
    }
    createPlaces(dto) {
        return this.placesService.createPlaces(dto);
    }
    updateField(dto, id) {
        return this.placesService.updateField(Number(id), dto);
    }
    deletePlaces(id) {
        return this.placesService.deletePlaces(Number(id));
    }
};
exports.PlacesController = PlacesController;
__decorate([
    (0, common_1.Get)('get'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlacesController.prototype, "getPlaces", null);
__decorate([
    (0, common_1.Get)('get_by_id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlacesController.prototype, "getPlacesById", null);
__decorate([
    (0, common_1.Get)('places_filter/:filter/:page/:limit'),
    __param(0, (0, common_1.Param)('filter')),
    __param(1, (0, common_1.Param)('page')),
    __param(2, (0, common_1.Param)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], PlacesController.prototype, "filterPlaces", null);
__decorate([
    (0, common_1.Get)('places_pagination/:page/:limit'),
    __param(0, (0, common_1.Param)('limit', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('page', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], PlacesController.prototype, "getPlacesLimit", null);
__decorate([
    (0, common_1.Post)('places_length'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdatePlaces_dto_1.UpdatePlacesDto]),
    __metadata("design:returntype", void 0)
], PlacesController.prototype, "getPlacesLength", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreatePlaces_dto_1.CreatePlacesDto]),
    __metadata("design:returntype", void 0)
], PlacesController.prototype, "createPlaces", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdatePlaces_dto_1.UpdatePlacesDto, String]),
    __metadata("design:returntype", void 0)
], PlacesController.prototype, "updateField", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlacesController.prototype, "deletePlaces", null);
exports.PlacesController = PlacesController = __decorate([
    (0, common_1.Controller)('places'),
    __metadata("design:paramtypes", [places_service_1.PlacesService])
], PlacesController);
//# sourceMappingURL=places.controller.js.map