import { Module } from '@nestjs/common';
import { PlacesService } from './places.service';
import {PlacesController} from "src/places/places.controller";


@Module({
  controllers: [PlacesController],
  providers: [PlacesService],
})
export class PlacesModule {}
