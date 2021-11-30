import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WycieczkiService } from './../wycieczki.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWycieczkaComponent } from './add-wycieczka.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AddWycieczkaComponent', () => {
  let component: AddWycieczkaComponent;
  let fixture: ComponentFixture<AddWycieczkaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWycieczkaComponent],
      providers: [WycieczkiService],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(AddWycieczkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
