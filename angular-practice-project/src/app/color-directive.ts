import {AfterViewInit, Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({ selector: '[colorDir]' })
export class ColorDirective implements AfterViewInit{
  @Input('colorDir') colorDir: string;

  constructor(private el: ElementRef, private ren: Renderer2) {}

  ngAfterViewInit() {
    // this.el.nativeElement.style.color = 'red';
    this.ren.setStyle(this.el.nativeElement, 'color', this.colorDir);
  }

}
