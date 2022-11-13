import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactRoutingModule } from './contact-routing.modules';
import { ModalModule } from '../modal/modal.module';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule, HttpClientModule, ContactRoutingModule, ModalModule 
  ]
})
export class ContactModule { }
