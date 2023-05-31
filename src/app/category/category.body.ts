import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CategoryCreate {
  @ApiProperty({
    required: true,
    type: String,
    name: 'name',
    description: 'Name of category',
  })
  @IsNotEmpty()
  @Length(3, 50)
  name: string;
}
