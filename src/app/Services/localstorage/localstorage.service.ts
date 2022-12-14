import { Injectable } from '@angular/core';
import { orderProduct } from 'src/app/Models/orderProduct';
import keys from 'src/app/Models/keys';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}
  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, keys.Cart).toString();
  }
  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, keys.Cart).toString(
      CryptoJS.enc.Utf8
    );
  }
  private SetLocalStorage(key: string, value: any) {
    localStorage.setItem(key, this.encrypt(JSON.stringify(value)));
  }
  private GetLocalStorage(key: string) {
    return this.decrypt(localStorage.getItem(key) || '');
  }
  Add(item: orderProduct, key: keys) {
    let result = this.GetLocalStorage(key);
    if (result) {
      let res_Array = JSON.parse(result) as Array<any>;
      let index = res_Array.findIndex((e: orderProduct) => e.id == item.id);
      if (index >= 0) {
        ++res_Array[index].Quantity;
        this.SetLocalStorage(keys.Cart, res_Array);
      } else {
        item.Quantity = 1;
        res_Array.push(item);
        this.SetLocalStorage(keys.Cart, res_Array);
      }
    } else {
      item.Quantity = 1;
      const arr = [item];
      this.SetLocalStorage(keys.Cart, arr);
    }
  }
  GetnumOfItems(key: keys): number {
    const res = this.GetLocalStorage(key);
    if (res) {
      const res_Arr = JSON.parse(res) as Array<orderProduct>;
      console.log(res_Arr);

      return res_Arr.length;
    }
    return 0;
  }
  GetItems(key: keys) {
    let result = this.GetLocalStorage(key);
    if (result) {
      return JSON.parse(result) as Array<orderProduct>;
    }
    return [];
  }
  Remove(key: keys) {
    if (this.GetLocalStorage(key)) {
      localStorage.removeItem(key);

    }
  }
  DeletItem(key: keys,item:any):boolean{
          const result= this.GetItems(key);
          const index=this.FindItem(result,item)
        if ( index >=0){
          result.splice(index,1)
          this.SetLocalStorage(key,result)
          return true;
        }
        return false;

          
        
  }
  FindItem(list:any[],item:any):number{
  
   return  list.findIndex(ele=> JSON.stringify(ele)===JSON.stringify( item))
   
   
  }
}
