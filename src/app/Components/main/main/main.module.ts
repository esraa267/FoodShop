import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { AboutUsComponent } from '../aboutus/about-us/about-us.component';
import { MiniServicesComponent } from '../mini-services/mini-services/mini-services.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { FooterComponent } from '../../footer/footer/footer.component';
import { HeaderComponent } from '../../header/header/header.component';
import { LayoutComponent } from '../layout/layout.component';
import { RouterModule } from '@angular/router';
import { commonModule } from '../../commons/common.module';
import { CardsModule } from '../../cards/cards.module';
import { MainRoutingModule } from './main-routing.module';





@NgModule({
  declarations: [
    MainComponent,
    AboutUsComponent,
    MiniServicesComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
     commonModule,CardsModule,MainRoutingModule



  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
