import { NgModule } from '@angular/core';
import { commonModule } from '../commons/common.module';
import { ModalComponent } from './modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
ModalComponent],

  
  imports: [
    commonModule,FormsModule,CommonModule
 
    
  ],
  exports:[ModalComponent]

})
export class ModalModule { }
