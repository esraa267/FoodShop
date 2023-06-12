import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';


import { LayoutComponent } from './layout/layout.component';

import { LayoutRoutingModule } from './layout-routing.module';

import { buttonModule } from 'src/app/Shared/components/button/button.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule, buttonModule, LayoutRoutingModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
