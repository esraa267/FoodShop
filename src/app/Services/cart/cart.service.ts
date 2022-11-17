import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cart } from 'src/app/Models/cart';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = new BehaviorSubject<number>(0);
  constructor(private http: HttpClient) {
    this.cartItems.next(this.GetTotal())
  }

  Addtocart(item: cart) {
    let result = localStorage.getItem('cart');
    if (result) {
      let res_Array = JSON.parse(result) as Array<any>;
      let index = res_Array.findIndex((e: cart) => e.id == item.id);
        console.log(index);

      if (index >= 0) {
        ++res_Array[index].Quantity;
        localStorage.setItem('cart', JSON.stringify(res_Array));
      }
    else{
      item.Quantity = 1;
      res_Array.push(item);
     
      localStorage.setItem('cart', JSON.stringify(res_Array));

    }
    }
    else {
      item.Quantity = 1;
      const arr = [item];
      localStorage.setItem('cart', JSON.stringify(arr));

    }
    this.cartItems.next(this.GetTotal())

  }
  GetTotal(): number {
    let res = localStorage.getItem('cart');
    if (res) {
      let res_Arr = JSON.parse(res) as Array<cart>;
      let total = 0;
      res_Arr.map(e => total += e.Quantity ? e.Quantity : 0)
      console.log(total);
      this.cartItems.next(total);
      return total;

    }
    return 0;
  }
  GetAll():cart[] {
   let result= localStorage.getItem('cart') 
   if(result){
    console.log(result);
    
    return  JSON.parse(result) as Array<cart>
   }
   
     return [];
  }
}
