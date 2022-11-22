import { Component, OnInit } from '@angular/core';
import { cart } from 'src/app/Models/cart';
import Order from 'src/app/Models/order';
import { CartService } from 'src/app/Services/cart/cart.service';
import { OrderService } from 'src/app/Services/order/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  CartList: cart[] = [];
  constructor(private cartService: CartService, private http: OrderService) {}

  ngOnInit(): void {
    this.GetAllFromCart();
    console.log( this.CartList.length<=0);
    
   
  }

  GetAllFromCart() {
    this.CartList = this.cartService.GetAll();
   this.cartService.cartItems.next(this.cartService.GetLength())
  }
  CheckOut() {

    const result:Order = {
      order:  {
        quantity: this.cartService.GetLength(),
      },
      orderProduct: this.cartService.GetAll(),
    };

    this.http.addOrder(result).subscribe(_=>
      
      {
        this.cartService.RemoveCart();
        this.cartService.cartItems.next( this.cartService.GetLength());
        this.GetAllFromCart();
      }
     
      
      );
  }

  Delete(item:any){
    this.cartService.DeleteItemFromCart(item);
    this.GetAllFromCart();
    
  }
}
