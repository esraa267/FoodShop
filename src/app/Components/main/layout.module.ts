import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { commonModule } from '../commons/common.module';

import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from '../footer/footer/footer.component';
import { HeaderComponent } from '../header/header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule, commonModule, LayoutRoutingModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
