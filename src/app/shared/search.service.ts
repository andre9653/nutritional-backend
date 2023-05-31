import { Injectable } from '@nestjs/common';
import { Tables } from 'src/model/modelsType';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SearchService {
  private database = process.env.DATABASE_NAME;

  constructor(private readonly prisma: PrismaService) {}

  async searchByProximity<Data>(
    entity: Tables,
    searchTerm: string,
  ): Promise<Data | any> {
    const result = await this.prisma.category.findMany({
      where: {
        name: {
          contains: searchTerm,
        },
      },
      take: 10,
    });

    return result;
  }
}
