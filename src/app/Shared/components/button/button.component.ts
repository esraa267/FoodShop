import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class BtnComponent implements OnInit {
 
  @Input() title = ''
  @Input() disabled = false

  @Output() onSave=new EventEmitter<any>()
  constructor() { }
  ngOnInit(): void {
  }
  save(){
   this.onSave.emit();
  
  }
}
