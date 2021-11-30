import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WycieczkiService } from './../wycieczki.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlashDealComponent } from './add-flash-deal.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AddFlashDealComponent', () => {
  let component: AddFlashDealComponent;
  let fixture: ComponentFixture<AddFlashDealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFlashDealComponent],
      providers: [WycieczkiService],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(AddFlashDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
