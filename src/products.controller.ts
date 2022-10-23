import {
	Controller,
	Get,
	Post,
	Put,
	Param,
	Body,
	Delete,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
	@Get()
	getAll(): string {
		return 'List all products';
	}

	@Get(':id')
	getOne(@Param() params): string {
		return `List one: ${params.id}`;
	}

	@Post()
	criar(@Body() product): string {
		console.log(product);
		return 'Product created';
	}

	@Put()
	update(@Body() product): string {
		console.log(product);
		return 'Product updated';
	}

	@Delete(':id')
	delete(@Param() params): string {
		console.log(params);
		return 'Product deleted';
	}
}
