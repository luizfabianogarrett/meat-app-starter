import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from 'app/order/order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [ 
    { label: "Dinheiro", value: "DIN"}, 
    { label: "Débito", value: "DEB"},
    { label: "Crédito", value: "CRE"},  
  ]

  constructor(private orderService: OrderService) { }

  cartItems(): CartItem[] {
    return this.orderService.cartItems()
  }

  increment(item: CartItem)
  {
    this.orderService.increment(item)
  }

  ngOnInit() {
  }

}
