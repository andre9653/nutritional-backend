import { IsNotEmpty, Length } from 'class-validator';

export class CategoryCreate {
  @IsNotEmpty()
  @Length(3, 50)
  name: string;
}
