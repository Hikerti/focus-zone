import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserCreateDto } from './dto/UserCreateDto.dto';
import * as bcrypt from 'bcrypt';

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
                email: dto.email,
                password: hashedpassword,
                name: dto.name,
                surname: dto.surname,
                login: dto.login,
                phone: dto.phone,
                adress: dto.adress,
                description: dto.description
            }
        })
    }
}
