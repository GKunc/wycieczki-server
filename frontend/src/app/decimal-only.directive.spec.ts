import { ElementRef } from '@angular/core';
import { instance, mock } from 'ts-mockito';
import { DecimalOnlyDirective } from './decimal-only.directive';

describe('DecimalOnlyDirective', () => {
  it('should create an instance', () => {
    const el = mock<ElementRef>();
    const directive = new DecimalOnlyDirective(instance(el));
    expect(directive).toBeTruthy();
  });
});
