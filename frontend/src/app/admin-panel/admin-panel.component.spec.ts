import { Wycieczka } from './../model/wycieczki.d';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WycieczkiService } from '../wycieczki.service';
import { AdminPanelComponent } from './admin-panel.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {  instance, mock } from 'ts-mockito';

describe('AdminPanelComponent', () => {
  let component: AdminPanelComponent;
  let fixture: ComponentFixture<AdminPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPanelComponent],
      providers: [WycieczkiService],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    });
    
    fixture = TestBed.createComponent(AdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render app-add-wycieczka component', () => {
    expect(document.querySelector('app-add-wycieczka')).toBeDefined();
  });

  it('should render app-wycieczka component', () => {
    expect(document.querySelector('app-wycieczka')).toBeDefined();
    expect(document.querySelectorAll('app-wycieczka').length).toEqual(0);
  });

  it('should render app-add-flash-deal component', () => {
    expect(document.querySelector('app-add-flash-deal')).toBeDefined();
  });

  it('should render 1 app-wycieczka component', () => {
    const wycieczkaMock = mock<Wycieczka>();
    component.allWycieczki = [instance(wycieczkaMock)];
    fixture.autoDetectChanges();
    expect(document.querySelectorAll('app-wycieczka').length).toEqual(1);
  });  

  it('should render 3 app-wycieczka component', () => {
    const wycieczkaMock = mock<Wycieczka>();
    component.allWycieczki = [instance(wycieczkaMock), instance(wycieczkaMock), instance(wycieczkaMock)];
    fixture.autoDetectChanges();
    expect(document.querySelectorAll('app-wycieczka').length).toEqual(3);
  });  
});
