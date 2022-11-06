import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer/footer.component';
import { HeaderComponent } from './Components/header/header/header.component';
import { MainModule } from './Components/main/main.module';
import { ScrollDirective } from './Directives/scroll.directive';


@NgModule({
  declarations: [
    AppComponent,HeaderComponent,FooterComponent,ScrollDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   MainModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
