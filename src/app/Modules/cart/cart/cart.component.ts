import { Component, OnInit } from '@angular/core';
import Order from 'src/app/Shared/models/order';
import { orderProduct } from 'src/app/Shared/models/orderProduct';
import { CartService } from 'src/app/Shared/services/cart/cart.service';
import { OrderService } from 'src/app/Shared/services/order/order.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  CartList: orderProduct[] = [];
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
        userId: 1,
      },
      orderProduct: this.cartService.GetAll(),
    };
console.log(result);

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
