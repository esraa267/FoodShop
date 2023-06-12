import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './button/button.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        BtnComponent

    ],
    imports: [
        CommonModule,RouterModule,FormsModule
    ]
    , exports: [BtnComponent]

})
export class commonModule { }
