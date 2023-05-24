import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CategoryModel } from 'src/model/modelsType';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  findAll(query: Prisma.categoryFindManyArgs): Promise<CategoryModel[]> {
    return this.prisma.category.findMany(query);
  }
}
