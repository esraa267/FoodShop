import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { AboutUsComponent } from './aboutus/about-us/about-us.component';
import { MiniServicesComponent } from './mini-services/mini-services/mini-services.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { RouterModule } from '@angular/router';
import { ScrollDirective } from 'src/app/Directives/scroll.directive';




@NgModule({
  declarations: [
    MainComponent,
    AboutUsComponent,
    MiniServicesComponent,
    CarouselComponent
    

  ],
  imports: [
    CommonModule,
    RouterModule



  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
