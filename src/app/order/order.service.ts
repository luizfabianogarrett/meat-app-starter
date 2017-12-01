import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";


@Injectable()
export class OrderService{

    constructor(private cartService: ShoppingCartService){}

    cartItems() : CartItem[]{
        return this.cartService.items;
    }

    increment(item: CartItem)
    {
        this.cartService.increment(item)
    }
}