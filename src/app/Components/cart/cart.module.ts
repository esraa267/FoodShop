import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { EmptyCartComponent } from './empty-cart/empty-cart.component';


@NgModule({
  declarations: [
    CartComponent,
    EmptyCartComponent
  ],
  imports: [
    CommonModule,CartRoutingModule
  ]
})
export class CartModule { }
