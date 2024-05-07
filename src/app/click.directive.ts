import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appClick]',
  standalone: true
})
export class ClickDirective {
  @HostBinding('style.cursor') cursor: string = 'pointer';
  constructor() { }

}
