import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { AboutUsComponent } from './aboutus/about-us/about-us.component';
import { MiniServicesComponent } from './mini-services/mini-services/mini-services.component';
import { RouterModule } from '@angular/router';
import { commonModule } from '../commons/common.module';
import { CarouselComponent } from './carousel/carousel.component';




@NgModule({
  declarations: [
    MainComponent,
    AboutUsComponent,
    MiniServicesComponent, CarouselComponent
    ,


  ],
  imports: [
    CommonModule,
    RouterModule, commonModule



  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
