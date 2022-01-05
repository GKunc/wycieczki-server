import { ElementRef } from "@angular/core";
import { mock } from "ts-mockito";
import { DecimalOnlyDirective } from "./decimal-only.directive";

describe('DecimalOnly', () => {
  let elMock: ElementRef;
  let uut: DecimalOnlyDirective;

  beforeEach(() => {
    elMock = mock<ElementRef>();
    uut = new DecimalOnlyDirective(elMock);
  });

// 100 / ‘’ / 0
// 100 / ‘’ / -1
// 100 / string / 1
// 100 / 100 / 0
// 100 / 100.00 / 2
// 100 / 100.000 / 2


  [
    {oldValue: 100, newValue: '', decimals: 0, result: 100},
    {oldValue: 100, newValue: '', decimals: -1, result: 100},
    {oldValue: 100, newValue: 'test', decimals: 1, result: 100},
    {oldValue: 100, newValue: '100', decimals: 1, result: 100},
    {oldValue: 100, newValue: '100.00', decimals: 2, result: 100},
    {oldValue: 100, newValue: '200.00', decimals: 2, result: 100},
    {oldValue: 100, newValue: '100.000', decimals: 2, result: 100},
  ].forEach(test => {
      it('should create', () => {
      elMock.nativeElement.value = test.oldValue;
      const newValue = test.newValue;
      uut.decimals = test.decimals;
      uut.onPaste(null, newValue);
      expect(uut.el.nativeElement.value).toEqual(test.result);
    });
  });
});