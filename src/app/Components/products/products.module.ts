import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from '../modal/modal.module';
import { ProductsComponent } from './products/products.component';
import { ProductsRoutingModule } from './products-routing.modules';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule, HttpClientModule, ProductsRoutingModule, ModalModule 
  ]
})
export class ProductsModule { }
