import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[MarginScroll]'
})
export class MarginScrollDirective {

  constructor() { }
  @HostBinding('class.margin_scroll') margin_scroll: boolean = false;
  @HostListener('window:scroll') onScroll() {
    if (window.scrollY >= 50) {
      this.margin_scroll = true;
    }
    else {
      this.margin_scroll = false;
    }
  }
}
