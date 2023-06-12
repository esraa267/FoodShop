import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { CardsModule } from '../cards/cards.module';
import { buttonModule } from 'src/app/Shared/components/button/button.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule,
    buttonModule,
    CardsModule,
    MainRoutingModule,
  ],
  exports: [MainComponent],
})
export class MainModule {}
