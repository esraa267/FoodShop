import { Component, OnInit } from '@angular/core';
import { cart } from 'src/app/Models/cart';
import { CartService } from 'src/app/Services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  CartList: cart[] = []
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.GetAllFromCart()
  }

  GetAllFromCart() {
    this.CartList = this.cartService.GetAll();
    console.log(this.CartList);
  }

}
