import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Pagination } from 'src/utils/Pagination';
import { CategoryService } from './category.service';
import { FindAllCategoriesDto } from './category.dto';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('category')
export class CategoryController {
  constructor(private category: CategoryService) {}

  private applyPagination(
    query: Prisma.categoryFindManyArgs,
    pagination: Pagination,
  ): Prisma.categoryFindManyArgs {
    query.take = pagination.limit;
    query.skip = pagination.offset;
    return query;
  }

  @Get()
  @HttpCode(200)
  @ApiOkResponse({
    description: 'List of categories',
    isArray: true,
  })
  findAll(@Query() { limit, offset }: FindAllCategoriesDto) {
    const pagination = new Pagination({ limit, offset });
    const query: Prisma.categoryFindManyArgs = {};

    this.applyPagination(query, pagination);

    return this.category.findAll(query);
  }

  @Get(':id')
  findOne(): string {
    return 'This action returns a #${id} category';
  }

  @Get('search/:query')
  findQuery(): string {
    return 'This action returns a category by query';
  }

  @Post()
  create(): string {
    return 'This action adds a new category';
  }

  @Put(':id')
  update(): string {
    return 'This action updates a #${id} category';
  }

  @Delete(':id')
  remove(): string {
    return 'This action removes a #${id} category';
  }
}
