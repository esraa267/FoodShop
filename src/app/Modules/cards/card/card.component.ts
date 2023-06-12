import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { orderProduct } from 'src/app/Shared/models/orderProduct';
import { APIService } from 'src/app/Shared/services/api/api.service';
import { CartService } from 'src/app/Shared/services/cart/cart.service';
import { ProductService } from 'src/app/Shared/services/products/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  Products$: Observable<any> = new Observable<any>();
  Products: Array<string> = [];
  productName: string = '';
  error = false;
  constructor(
    private cartService: CartService,
    private api: APIService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.GetAll();
  }
  AddToCart(item: orderProduct) {
    this.cartService.Addtocart(item);
  }
  GetAll() {
    this.Products$ = this.api.getAll();
  }
  saveProduct() {
    this.Products.push(this.productName);
    this.productName='';
    this.productService.counter.next(this.Products.length);
  }
  isProductNameEmpty(): boolean {
    return this.productName.trim().length == 0;
  }
}
