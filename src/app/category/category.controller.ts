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
import {
  createDoc,
  findAllDoc,
  findOneDoc,
  findQueryDoc,
} from './category.doc';
import { StatusCodes } from 'src/utils/constantes';

@Controller('category')
@ApiTags('Category')
export class CategoryController {
  constructor(private category: CategoryService) {}

  @Get()
  @HttpCode(StatusCodes.OK)
  @ApiOperation({ summary: 'Get all categories' })
  @ApiOkResponse(findAllDoc)
  findAll(@Query() { limit, offset }: FindAllCategoriesDto) {
    const pagination = new Pagination({ limit, offset });

    return this.category.findAll(pagination);
  }

  @Get(':id')
  @HttpCode(StatusCodes.OK)
  @ApiOperation({ summary: 'Get category by id' })
  @ApiOkResponse(findOneDoc)
  findOne(@Query() { id }: FindOneCategoryDto) {
    return this.category.findOne(id);
  }

  @Get('search/:query')
  @HttpCode(StatusCodes.OK)
  @ApiOperation({ summary: 'Get category by query' })
  @ApiOkResponse(findQueryDoc)
  findQuery(@Query() { query, limit, offset }: SearchCategory) {
    const pagination = new Pagination({ limit, offset });

    return this.category.searchByProximity(query, pagination);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new category' })
  @ApiOkResponse(createDoc)
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
