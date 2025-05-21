import { Injectable } from '@nestjs/common';
import { UserCreateDto } from './dto/UserCreateDto.dto';
import * as bcrypt from 'bcrypt';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class UserService {
    constructor (private readonly prisma: PrismaService) {}

    async getUserById(id: string) {
        return await this.prisma.user.findFirst({
            where: {
                id
            }
        })
    }

    async getUsers() {
        return await this.prisma.user.findMany()
    }

    async getUserByEmail(email: string) {
        return await this.prisma.user.findFirst({
            where: {
                email
            }
        })
    }

    async create(dto: UserCreateDto) {
        const hashedpassword = await bcrypt.hash(dto.password, 10)

        return await this.prisma.user.create({
            data: {
                ...dto,
                password: hashedpassword,
            }
        })
    }
}
