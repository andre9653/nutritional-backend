import { Controller, Get, HttpCode } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Controller('hello-world')
export class HelloWorldController {
  constructor(private prisma: PrismaService) {}
  @Get()
  @HttpCode(200)
  getHello() {
    return this.prisma.nutritional_data.findMany({
      include: {
        food: true,
        category: true,
        preparation: true,
      },
      take: 10,
    });
  }
}
