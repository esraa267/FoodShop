import { Directive, HostBinding, HostListener } from '@angular/core';
@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {
  constructor() { }
  @HostBinding('class.header-appear') header_appear: boolean = false;
  @HostListener('window:scroll') onScroll() {
    if (window.scrollY >= 50) {
      this.header_appear = true;
    }
    else {
      this.header_appear = false;
    }
  }
}
