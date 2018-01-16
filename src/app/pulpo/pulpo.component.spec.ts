/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PulpoComponent } from './pulpo.component';

describe('PulpoComponent', () => {
  let component: PulpoComponent;
  let fixture: ComponentFixture<PulpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
