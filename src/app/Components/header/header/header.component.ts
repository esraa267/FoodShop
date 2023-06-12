import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/Services/cart/cart.service';
import { ProductService } from 'src/app/Services/products/product.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  totalInCart: number = 0;
  totalInCart$!: Observable<number>;
  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    //this.GetTotalInCart()
    this.getNumOfProducts();
  }
  GetTotalInCart() {
    //  this.totalInCart = this.cartService.GetTotal();
    this.cartService.cartItems.subscribe((r) => (this.totalInCart = r));
  }

  getNumOfProducts() {
    this.totalInCart$ = this.productService.counter;
  }
}
