import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CategoryModel } from 'src/model/modelsType';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  findAll(pagination: Prisma.categoryFindManyArgs): Promise<CategoryModel[]> {
    return this.prisma.category.findMany({ ...pagination });
  }

  async findOne(id: string) {
    const category = await this.prisma.category.findUnique({ where: { id } });
    if (!category) {
      throw new NotFoundException();
    }
    return category;
  }

  async searchByName(name: string) {
    const category = await this.prisma.category.findMany({ where: { name } });
    if (!category) {
      throw new NotFoundException();
    }
    return category;
  }
}
