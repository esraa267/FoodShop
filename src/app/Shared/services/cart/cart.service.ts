import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalstorageService } from '../localstorage/localstorage.service';
import keys from '../../models/keys';
import { orderProduct } from '../../models/orderProduct';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = new BehaviorSubject<number>(0);
  constructor(private locaclstorage: LocalstorageService) {
    this.cartItems.next(this.locaclstorage.GetnumOfItems(keys.Cart))
  }

  Addtocart(item: orderProduct) {
    this.locaclstorage.Add(item,keys.Cart)
   
    this.cartItems.next(this.locaclstorage.GetnumOfItems(keys.Cart))

  }
 
  GetAll(): orderProduct[] {
  return this.locaclstorage.GetItems(keys.Cart);
  }
  GetLength(){
    return this.locaclstorage.GetnumOfItems(keys.Cart);
  }
  RemoveCart(){
    this.locaclstorage.Remove(keys.Cart)
  }
  DeleteItemFromCart(item:any){
 return  this.locaclstorage.DeletItem(keys.Cart,item);


  }
}
