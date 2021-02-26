import { Directive, HostListener } from '@angular/core';
import { forwardRef, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[text-value-accessor-directive]',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => TextValueAccessorDirective), multi: true }]
})
export class TextValueAccessorDirective {
  constructor() {}

  onChange: any = () => {};
  onTouch: any = () => {};
  val = ''; // this is the updated value that the class accesses
  @HostListener('valueUpdate', ['$event'])
  handleChange(val) {
    // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
    this.val = val;
    this.onChange(val);
    this.onTouch(val);
  }

  // this method sets the value programmatically
  writeValue(value: any) {
    this.handleChange(value);
  }
  // upon UI element value changes, this method gets triggered
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  // upon touching the element, this method gets triggered
  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
}
