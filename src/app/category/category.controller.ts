import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Pagination } from 'src/utils/Pagination';
import { CategoryService } from './category.service';
import {
  FindAllCategoriesDto,
  FindOneCategoryDto,
  SearchCategory,
} from './category.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CategoryCreate } from './category.body';

@Controller('category')
@ApiTags('Category')
export class CategoryController {
  constructor(private category: CategoryService) {}

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

    return this.category.findAll(pagination);
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
  findQuery(@Query() { query, limit, offset }: SearchCategory) {
    const pagination = new Pagination({ limit, offset });

    return this.category.searchByProximity(query, pagination);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new category' })
  @ApiOkResponse({
    description: 'Category',
    schema: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
      },
      example: {
        id: '1',
        name: 'Category 1',
      },
    },
  })
  create(@Body() body: CategoryCreate) {
    return this.category.create(body);
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
