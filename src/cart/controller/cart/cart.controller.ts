import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CartService } from 'src/cart/services/cart/cart.service';
import { addToCartDto } from 'src/DTOs/cart.Dto';
import { cartEntity } from 'src/Entities/createCart.Entity';

@ApiTags('Cart')
@Controller('cart')
export class CartController {
  constructor(
    private readonly cartService: CartService
  ) {}

  @Post()
  async addTocart(@Body() addtocart: addToCartDto) {
    try {
      const result = await this.cartService.addTocart(addtocart);
      return result;
    } catch (error) {
      throw new HttpException('Could not add item to cart', HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async getCartItems(): Promise<cartEntity[]> {
    try {
      const cartItems = await this.cartService.getCartItems();
      return cartItems;
    } catch (error) {
      throw new HttpException('Could not fetch cart items', HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async deleteFromCart(@Param('id') id:number){

    try {
      const result = await this.cartService.deleteFromCart(id);
      return result;
      
    } catch (error) {
      if(error.status === HttpStatus.NOT_FOUND){

        throw new HttpException('Item not found in cart', HttpStatus.NOT_FOUND);

      }

      throw new HttpException('Could not delete item from cart', HttpStatus.BAD_REQUEST);
      
    }
  }

}
