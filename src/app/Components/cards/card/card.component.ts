import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { orderProduct } from 'src/app/Models/orderProduct';
import { APIService } from 'src/app/Services/api/api.service';
import { CartService } from 'src/app/Services/cart/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  Products$: Observable<any> = new Observable<any>();
  constructor(private cartService: CartService, private api: APIService) {}

  ngOnInit(): void {
    this.GetAll();
  }
  AddToCart(item: orderProduct) {
    console.log(item);
    this.cartService.Addtocart(item);
  }
  GetAll() {
    this.Products$ = this.api.getAll();
  }
}
