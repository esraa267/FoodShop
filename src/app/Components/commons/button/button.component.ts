import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class BtnComponent implements OnInit {

  @Input() title = ''
  @Input() link = ''
  constructor() { }
  ngOnInit(): void {
  }

}
