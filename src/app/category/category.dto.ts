import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

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
