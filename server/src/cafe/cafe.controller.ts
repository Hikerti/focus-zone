import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CafeService } from './cafe.service';
import { CreateCartDto } from './dto/CreateCart.dto';
import { UpdateCartDto } from './dto/UpdateCart.dto';

@Controller('cafe')
export class CafeController {
  constructor(private readonly cafeService: CafeService) {}

  @Get('get')
  getCafe() {
    return this.cafeService.getCardCafe()
  }

  @Get('card_filter/:filter') 
  filter_card(@Param('filter') filter: string) {
    return this.cafeService.filterCards(filter)
  }

  @Post('create')
  createCafe(@Body() dto: CreateCartDto) {
    return this.cafeService.createCardCafe(dto)
  }

  @Put('update/:id')
  update(@Body() dto: UpdateCartDto, @Param("id") id: string) {
    return this.cafeService.updateField(Number(id), dto)
  }

  @Delete('delete/:id')
  delete(@Param('id') id: string) {
    return this.cafeService.deleteCardCafe(Number(id))
  }
}
