import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollDirective } from './Directives/scroll.directive';
import { HttpClientModule } from '@angular/common/http';
import { MarginScrollDirective } from './Directives/margin-scroll/margin-scroll.directive';
import { RegisterComponent } from './Components/register/register.component';

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
