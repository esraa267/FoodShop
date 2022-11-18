import { Injectable } from '@angular/core';
import { cart } from 'src/app/Models/cart';
import { BehaviorSubject } from 'rxjs';
import { LocalstorageService } from '../localstorage/localstorage.service';
import keys from 'src/app/Models/keys';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = new BehaviorSubject<number>(0);
  constructor(private locaclstorage: LocalstorageService) {
    this.cartItems.next(this.locaclstorage.GetnumOfItems(keys.Cart))
  }

  Addtocart(item: cart) {
    this.locaclstorage.Add(item,keys.Cart)
   
    this.cartItems.next(this.locaclstorage.GetnumOfItems(keys.Cart))

  }
 
  GetAll(): cart[] {
  return this.locaclstorage.GetItems(keys.Cart);
  }
}
