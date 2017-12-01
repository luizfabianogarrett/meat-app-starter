import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[]
  @Output() increment = new EventEmitter<CartItem>()
  @Output() decrement = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {
  }

  emitIncrement(item: CartItem){
    this.increment.emit(item)
  }

  emitDecrement(item: CartItem){
    this.decrement.emit(item)
  }

  emitRemove(item: CartItem){
    this.remove.emit(item)
  }

}
