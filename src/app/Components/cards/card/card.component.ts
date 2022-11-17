import { Component, OnInit } from '@angular/core';
import { cart } from 'src/app/Models/cart';
import { CartService } from 'src/app/Services/cart/cart.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private cartService:CartService) { }

  ngOnInit(): void {

 
    
  
    
  }
  AddToCart(item:cart){
    
    
  this.cartService.Addtocart(item);

  }

}
