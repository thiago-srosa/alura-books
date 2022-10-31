import { BooksService } from './books.service';
import { Book } from './book.model';
import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  Delete,
} from '@nestjs/common';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  getAll(): Promise<Book[]> {
    return this.booksService.getAll();
  }

  @Get(':id')
  getOne(@Param() params): Promise<Book> {
    return this.booksService.getOne(params.id);
  }

  @Post()
  create(@Body() book: Book) {
    book.id = 100;
    this.booksService.create(book);
  }

  @Put()
  update(@Body() book: Book): Promise<[number]> {
    return this.booksService.update(book);
  }

  @Delete(':id')
  delete(@Param() params) {
    this.booksService.delete(params.id);
  }
}
