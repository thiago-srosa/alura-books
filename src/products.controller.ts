import {
	Controller,
	Get,
	Post,
	Put,
	Param,
	Body,
	Delete,
} from '@nestjs/common';

import { Product } from './product.model';

@Controller('products')
export class ProductsController {
	products: Product[] = [
		new Product('BOOK01', 'Name of the book 1', 29.9),
		new Product('BOOK01', 'Name of the book 2', 39.9),
		new Product('BOOK01', 'Name of the book 3', 29.9),
	];

	@Get()
	getAll(): Product[] {
		return this.products;
	}

	@Get(':id')
	getOne(@Param() params): Product {
		return this.products[0];
	}

	@Post()
	criar(@Body() product: Product) {
		product.id = 100;
		this.products.push(product);
	}

	@Put()
	update(@Body() product: Product): Product {
		return product;
	}

	@Delete(':id')
	delete(@Param() params) {		
		this.products.pop();
	}
}
