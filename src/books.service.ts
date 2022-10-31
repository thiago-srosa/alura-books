import { Book } from './book.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book) private bookModel: typeof Book) {}

  async getAll(): Promise<Book[]> {
    return this.bookModel.findAll();
  }

  async getOne(id: number): Promise<Book> {
    return this.bookModel.findByPk(id);
  }

  async create(book: Book): Promise<void> {
    this.bookModel.create(book);
  }

  async update(book: Book): Promise<[number]> {
    return this.bookModel.update(book, {
      where: { id: book.id },
    });
  }

  async delete(id: number) {
    const book: Book = await this.getOne(id);
    book.destroy();
  }
}
