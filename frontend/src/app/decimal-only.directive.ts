import {
  Directive,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appDecimalOnly]',
})
export class DecimalOnlyDirective {
  @Input() decimals = 0;

  private check(value: string): RegExpMatchArray {
    console.log("CHECK")
    if (this.decimals <= 0) {
      return String(value).match(new RegExp(/^\d+$/));
    }
    const regExpString = `^\\s*((\\d+(\\.\\d{0,${
      this.decimals
    }})?)|((\\d*(\\.\\d{1,${
      this.decimals
    }}))))\\s*$`;
    console.log(String(value).match(new RegExp(regExpString)))
    return String(value).match(new RegExp(regExpString));
  }

  private run(oldValue, newValue): void {
      const currentValue: string = newValue;
      if (currentValue !== '' && !this.check(currentValue)) {
        console.log("OLD")
        this.el.nativeElement.value = oldValue;
      }
  }

  constructor(public el: ElementRef) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent, newValue: string): void {
    this.run(this.el.nativeElement.value, newValue);
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent, newValue: string): void {
    this.run(this.el.nativeElement.value, newValue);
  }
}
