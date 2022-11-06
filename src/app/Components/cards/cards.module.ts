import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardsRoutingModule } from './cards-routing.modules';
import { commonModule } from '../commons/common.module';


@NgModule({
  declarations: [
    CardComponent

  ],
  imports: [
    CardsRoutingModule,
    CommonModule,commonModule
  ]
 
})
export class CardsModule { }
