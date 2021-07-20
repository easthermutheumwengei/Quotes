import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) { }

  @HostListener("click") onClicks() {
    this.highlight('yellow')
  }
  @HostListener("dblclick") onDoubleClicks() {
    this.highlight('None');
  }
  private highlight(action: string) {
    this.elem.nativeElement.style.backgroundColor = action;
  }
}
