import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appWhiteSpace]'
})
export class WhiteSpaceDirective {

  constructor(private el: ElementRef<HTMLInputElement>) { }

  @HostListener('blur') onBlur() {
    const inputElement = this.el.nativeElement as HTMLInputElement;
    if (inputElement && inputElement.value) {
      const trimmedValue = inputElement.value.trim();
      inputElement.value = trimmedValue;
    }
  }

}













