import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { buttonModule } from 'src/app/Shared/components/button/button.module';
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [ModalComponent],
  imports: [buttonModule, FormsModule, CommonModule],
  exports: [ModalComponent],
})
export class ModalModule {}
