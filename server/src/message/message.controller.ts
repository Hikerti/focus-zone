import {Controller, Get, Param, Post, Put, Delete, Body} from '@nestjs/common';
import { MessageService } from './message.service';
import {CreateMessageDto} from "./dto/CreateMessage.dto";
import {UpdateMessageDto} from "./dto/UpdateMessage.dto";

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}
    
    @Get('get_user_messages/:userId')
    getUserMessage(@Param('userId') userId: string) {
      return this.messageService.getUserMessage(userId)
    }

    @Get('get_cafe_messages/:cafeId')
    getCafeMessage(@Param('cafeId') cafeId: string) {
        return this.messageService.getCafeMessage(Number(cafeId))
    }

    @Get('get_id_messages/:id')
    getIdMessage(@Param('id') id: string) {
        return this.messageService.getIdMessage(Number(id))
    }

    @Post('create_messages')
    createMessage(@Body() dto: CreateMessageDto) {
        return this.messageService.createMessage(dto)
    }

    @Put('update_messages/:id')
    updateMessage(@Param('id') id: string, @Body() dto: UpdateMessageDto) {
        return this.messageService.updateMessage(Number(id), dto)
    }

    @Delete('delete_messages/:id')
    deleteMessage(@Param('id') id: string) {
        return this.messageService.deleteMessage(Number(id))
    }
}
