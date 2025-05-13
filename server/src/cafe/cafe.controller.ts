import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
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

  @Get('get_by_id/:id')
  getCafeById(@Param('id') id: string) {
      return this.cafeService.getCardCafeById(Number(id))
  }

  @Get('card_filter/:filter/:page/:limit')
  filter_card(
      @Param('filter') filter: string,
      @Param('page') page: string,
      @Param('limit') limit: string,
  ) {
    return this.cafeService.filterCards(filter, Number(limit), Number(page));
  }

  @Get('card_pagination/:page/:limit')
  getCafePage(
    @Param('limit', ParseIntPipe) limit: number, 
    @Param('page', ParseIntPipe) page: number
  ) {
    return this.cafeService.getCafePage(limit, page)
  }

  @Post('cards_length')
  getCafeLength(@Body() dto: UpdateCartDto) {
      return this.cafeService.getCardCafeLength(dto)
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
