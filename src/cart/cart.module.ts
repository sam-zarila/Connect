import { Module } from '@nestjs/common';
import { CartController } from './controller/cart/cart.controller';
import { CartService } from './services/cart/cart.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cartEntity } from 'src/Entities/createCart.Entity';

@Module({
  imports:[TypeOrmModule.forFeature([cartEntity])],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule {}
