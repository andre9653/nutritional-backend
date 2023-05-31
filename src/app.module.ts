import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { CategoryController } from './app/category/category.controller';
import { CategoryService } from './app/category/category.service';
import { SearchService } from './app/shared/search.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
  controllers: [AppController, CategoryController],
  providers: [AppService, PrismaService, CategoryService, SearchService],
})
export class AppModule {}
