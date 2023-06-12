import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class BtnComponent implements OnInit {
  productName:string =''
  @Input() title = ''
  @Output() onSave=new EventEmitter<string>()
  constructor() { }
  ngOnInit(): void {
  }
  save(){
   this.onSave.emit(this.productName);
   this.productName=''
  }
}
