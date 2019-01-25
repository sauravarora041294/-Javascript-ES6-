import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div #text [colorDir]="'red'">Hello World</div>`,
  styles: ['']
})
export class AppComponent implements AfterViewInit {
  // @ViewChild('text') el: ElementRef;
  ngAfterViewInit() {
    // this.el.nativeElement.style.color = 'blue';
    // this.el.nativeElement.querySelector('span').style.color = 'red';
  }
}
