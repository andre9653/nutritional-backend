import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CategoryModel } from 'src/model/modelsType';
import { PrismaService } from 'src/prisma.service';
import { Pagination } from 'src/utils/Pagination';
import { StatusCodes } from 'src/utils/constantes';
import { CategoryCreate } from './category.body';
import crypto from 'crypto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async findAll({ limit, offset }: Pagination) {
    const skip = offset;
    const take = limit;
    const pagination: Prisma.categoryFindManyArgs = {
      take,
      skip,
    };

    const [categories, count] = await Promise.all([
      this.prisma.category.findMany({ ...pagination }),
      this.prisma.category.count(),
    ]);

    const hasNextPage = skip + limit < count;

    const nextOffset = hasNextPage ? offset + limit : null;
    const pages = Math.ceil(count / limit);

    return {
      categories,
      nextOffset,
      pages,
      count,
    };
  }

  async findOne(id: string) {
    if (!id.trim()) {
      throw new NotFoundException({
        message: 'Must provide a valid id',
        statusCode: StatusCodes.BAD_REQUEST,
      });
    }
    const category = await this.prisma.category.findUnique({ where: { id } });
    if (!category) {
      throw new NotFoundException({
        message: 'Category not found',
        statusCode: StatusCodes.NOT_FOUND,
      });
    }
    return category;
  }

  async searchByProximity(searchTerm: string, { limit, offset }: Pagination) {
    const skip = offset;
    const take = limit;
    const where: Prisma.categoryWhereInput = {
      name: {
        contains: searchTerm,
      },
    };

    const [categories, count] = await Promise.all([
      this.prisma.category.findMany({ where, take, skip }),
      this.prisma.category.count({ where }),
    ]);

    const result = categories.slice(0, limit);
    const hasNextPage = skip + limit < count;

    const nextOffset = hasNextPage ? offset + limit : null;
    const pages = Math.ceil(count / limit);

    return {
      categories: result,
      nextOffset,
      pages,
      count,
    };
  }

  async create({ name }: CategoryCreate) {
    if (!name.trim()) {
      throw new NotFoundException({
        message: 'Must provide a valid name',
        statusCode: StatusCodes.BAD_REQUEST,
      });
    }

    const category = await this.prisma.category.create({
      data: { id: crypto.randomUUID(), name },
    });
    return category;
  }
}
