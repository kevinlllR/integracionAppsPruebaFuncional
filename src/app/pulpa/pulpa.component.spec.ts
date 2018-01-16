/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PulpaComponent } from './pulpa.component';

describe('PulpaComponent', () => {
  let component: PulpaComponent;
  let fixture: ComponentFixture<PulpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
