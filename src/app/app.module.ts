import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ScrollDirective } from './Shared/directives/scroll.directive';
import { MarginScrollDirective } from './Shared/directives/margin-scroll/margin-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    ScrollDirective,
    MarginScrollDirective,
    
  ],

  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  // providers: [{ provide: HTTP_INTERCEPTORS, useClass: HeaderInceptorService, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
