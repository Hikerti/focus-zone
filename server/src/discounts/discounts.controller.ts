import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { DiscountsService } from './discounts.service';
import {CreateDescountDto} from "./dto/CreateDescount.dto";
import {UpdateDescountDto} from "./dto/UpdateDescount.dto";

@Controller('discounts')
export class DiscountsController {
  constructor(private readonly discountsService: DiscountsService) {}

    @Get('get_discount')
    getDiscount() {
      return this.discountsService.getDiscount();
    }
    @Get('get_discount_user_id/:user_id')
    getDiscountUserId(@Param('user_id') user_id: string) {
        return this.discountsService.getDiscountUserId(user_id);
    }
    @Get('get_discount_cafe_id/:cafe_id')
    getDiscountCafeId(@Param('cafe_id') cafe_id: string) {
        return this.discountsService.getDiscountCafeId(Number(cafe_id));
    }
    @Post('create_discount')
    createDiscount(@Body() discountDto: CreateDescountDto) {
      return this.discountsService.createDiscounts(discountDto);
    }
    @Put('update_discount/:discount_id')
    updateDiscount(@Body() updateDto: UpdateDescountDto, @Param('discount_id') discount_id: string) {
      return this.discountsService.updateDiscounts(Number(discount_id), updateDto)
    }
    @Delete('delete_discount/:discount_id')
    deleteDiscount(@Param('discount_id') discount_id: string) {
      return this.discountsService.deleteDiscount(Number(discount_id));
    }
}
