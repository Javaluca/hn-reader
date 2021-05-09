import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHorizontalScroll]'
})
export class HorizontalScrollDirective {

  constructor(private elRef: ElementRef,  private renderer: Renderer2) {
    this.renderer.setStyle(elRef.nativeElement, 'scroll-behavior', 'unset');
  }

  @HostListener('document:mousewheel', ['$event'])
  onDocumentMousewheelEvent(event: WheelEvent) {
    this.elRef.nativeElement.scrollLeft += event.deltaY;
  }

}
