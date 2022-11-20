import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer/footer.component';
import { HeaderComponent } from './Components/header/header/header.component';
import { MainModule } from './Components/main/main.module';
import { ScrollDirective } from './Directives/scroll.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInceptorService } from './Services/inceptor/header-inceptor.service';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, ScrollDirective],


  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    HttpClientModule

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HeaderInceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
