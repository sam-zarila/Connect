import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { addToCartDto } from 'src/DTOs/cart.Dto';
import { cartEntity } from 'src/Entities/createCart.Entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartService {
    constructor(
        @InjectRepository(cartEntity)
        private readonly cartRepository: Repository<cartEntity>,
    ) {}

    async addTocart(addTocart: addToCartDto): Promise<{ message: string }> {
        const { item, quantity, name, image, price } = addTocart;

        console.log('Adding to cart:', { item, quantity, name, image, price });

        try {
            const existingItem = await this.cartRepository.findOne({ where: { item } });

            if (existingItem) {
                existingItem.quantity += quantity; // Update quantity
                await this.cartRepository.save(existingItem);
                return { message: 'Item quantity updated in your cart' };
            }

            const newItem = this.cartRepository.create({ item, quantity, name, image, price });
            await this.cartRepository.save(newItem);
            return { message: 'Item added to cart' };
        } catch (error) {
            console.error('Error adding item to cart:', error);
            throw new Error('Could not add item to cart');
        }
    }

    // Method to fetch all cart items
    async getCartItems(): Promise<cartEntity[]> {
        try {
            const cartItems = await this.cartRepository.find();
            return cartItems;
        } catch (error) {
            console.error('Error fetching cart items:', error);
            throw new Error('Could not fetch cart items');
        }
    }

    async deleteFromCart(itemId:number): Promise<{message:string}> {
        try {

            const item = await this.cartRepository.findOne({ where: { id: itemId } });
            
            if(!item){
                throw new Error('Item not found in cart');
            }

            await this.cartRepository.remove(item);
            return { message: 'Item removed from cart' };
            
        } catch (error) {
            
        }
    }
}
