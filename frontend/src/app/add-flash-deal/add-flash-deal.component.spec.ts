import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WycieczkiService } from './../wycieczki.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlashDealComponent } from './add-flash-deal.component';
import { CUSTOM_ELEMENTS_SCHEMA, TemplateRef } from '@angular/core';

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

  it('should render add button', () => {
    fixture.autoDetectChanges();
    expect(document.querySelectorAll('.fa-gift').length).toEqual(1);
  });  

  it('should render add button', () => {
    fixture.autoDetectChanges();
    expect(document.querySelectorAll('.fa-gift').length).toEqual(1);
  });  

  it('should render title', () => {
    const content = fixture.nativeElement.querySelector('#content')
    component.open(content);
    fixture.autoDetectChanges();
    expect(document.querySelector('#modal-basic-title').innerHTML).toEqual('Stwórz promocję');
  });

  it('should render action buttons', () => {
    fixture.autoDetectChanges();
    expect(document.querySelector('.btn-danger').innerHTML).toEqual('Anuluj');
    expect(document.querySelector('.btn-primary').innerHTML).toEqual('Aktywuj');
  });

});
