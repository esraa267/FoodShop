import { Injectable } from '@angular/core';
import { cart } from 'src/app/Models/cart';
import { BehaviorSubject } from 'rxjs';
import { LocalstorageService } from '../localstorage/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = new BehaviorSubject<number>(0);
  constructor(private locaclstorage: LocalstorageService) {
    this.cartItems.next(this.locaclstorage.GetnumOfCartItems())
  }

  Addtocart(item: cart) {
    this.locaclstorage.AddToCart(item)
   
    this.cartItems.next(this.locaclstorage.GetnumOfCartItems())

  }
 
  GetAll(): cart[] {
  return this.locaclstorage.GetCartItems();
  }
}
