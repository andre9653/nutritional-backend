import { type CategoryModel } from 'src/model/modelsType';
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
import { FindAllCategoriesDto, FindOneCategoryDto } from './category.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('category')
@ApiTags('Category')
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
  @ApiOperation({ summary: 'Get all categories' })
  @ApiOkResponse({
    description: 'List of categories',
    isArray: true,
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
        },
      },
    },
  })
  findAll(@Query() { limit, offset }: FindAllCategoriesDto) {
    const pagination = new Pagination({ limit, offset });
    const query: Prisma.categoryFindManyArgs = {};

    this.applyPagination(query, pagination);

    return this.category.findAll(query);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get category by id' })
  @ApiOkResponse({
    description: 'Category',
    schema: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
      },
    },
  })
  findOne(@Query() { id }: FindOneCategoryDto) {
    return this.category.findOne(id);
  }

  @Get('search/:query')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get category by query' })
  @ApiOkResponse({
    description: 'Category',
    isArray: true,
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
        },
      },
    },
  })
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
