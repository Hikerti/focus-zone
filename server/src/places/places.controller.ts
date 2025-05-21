import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { PlacesService } from './places.service';
import {CreatePlacesDto} from "./dto/CreatePlaces.dto";
import {UpdatePlacesDto} from "./dto/UpdatePlaces.dto";

@Controller('places')
export class PlacesController {
    constructor(private readonly placesService: PlacesService) {}

    @Get('get')
    getPlaces() {
        return this.placesService.getPlaces()
    }

    @Get('get_by_id/:id')
    getPlacesById(@Param('id') id: string) {
        return this.placesService.getPlacesById(Number(id))
    }

    @Get('places_filter/:filter/:page/:limit')
    filterPlaces(
        @Param('filter') filter: string,
        @Param('page') page: string,
        @Param('limit') limit: string,
    ) {
        return this.placesService.filterPlaces(filter, Number(limit), Number(page));
    }

    @Get('places_pagination/:page/:limit')
    getPlacesLimit(
        @Param('limit', ParseIntPipe) limit: number,
        @Param('page', ParseIntPipe) page: number
    ) {
        return this.placesService.getPlacesLimit(limit, page)
    }

    @Post('places_length')
    getPlacesLength(@Body() dto: UpdatePlacesDto) {
        return this.placesService.getPlacesLength(dto)
    }

    @Post('create')
    createPlaces(@Body() dto: CreatePlacesDto) {
        return this.placesService.createPlaces(dto)
    }

    @Put('update/:id')
    updateField(@Body() dto: UpdatePlacesDto, @Param("id") id: string) {
        return this.placesService.updateField(Number(id), dto)
    }

    @Delete('delete/:id')
    deletePlaces(@Param('id') id: string) {
        return this.placesService.deletePlaces(Number(id))
    }
}
