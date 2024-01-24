/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SimbaComponent } from './Simba.component';

describe('SimbaComponent', () => {
  let component: SimbaComponent;
  let fixture: ComponentFixture<SimbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
