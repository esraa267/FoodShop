import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalInCart: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.GetTotalInCart()
  }
  GetTotalInCart() {
    //  this.totalInCart = this.cartService.GetTotal();
    this.cartService.cartItems.subscribe(r => this.totalInCart = r
    )
  }
}
