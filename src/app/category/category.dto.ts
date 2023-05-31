import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class FindAllCategoriesDto {
  @ApiProperty({
    required: false,
    type: Number,
    description: 'Limit of items to get (10 by default)',
    default: 10,
  })
  @IsOptional()
  limit?: number;

  @ApiProperty({
    required: false,
    type: Number,
    description: 'Offset of items to get (0 by default)',
    default: 0,
  })
  @IsOptional()
  offset?: number;
}

export class FindOneCategoryDto {
  @ApiProperty({
    required: true,
    type: String,
    description: 'Id of category',
  })
  @IsNotEmpty()
  id: string;
}

export class SearchCategory {
  @ApiProperty({
    required: true,
    type: String,
    description: 'Term to search',
  })
  @IsNotEmpty()
  query: string;

  @ApiProperty({
    required: false,
    type: Number,
    description: 'Limit of items to get (10 by default)',
    default: 10,
  })
  @IsOptional()
  limit?: number;

  @ApiProperty({
    required: false,
    type: Number,
    description: 'Offset of items to get (0 by default)',
    default: 0,
  })
  @IsOptional()
  offset?: number;
}
