import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsRoutingModule } from './cards-routing.modules';
import { buttonModule } from 'src/app/Shared/components/button/button.module';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CardComponent

  ],
  imports: [
    CardsRoutingModule,
    CommonModule,buttonModule,FormsModule
  ],exports:[
    CardComponent
  ]
 
})
export class CardsModule { }
