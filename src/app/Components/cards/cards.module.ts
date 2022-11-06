import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardsRoutingModule } from './cards-routing.modules';


@NgModule({
  declarations: [
    CardComponent,

  ],
  imports: [
    CardsRoutingModule,
    CommonModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardsModule { }
