import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGSwitchComponent } from './ng-switch.component';

describe('NGSwitchComponent', () => {
  let component: NGSwitchComponent;
  let fixture: ComponentFixture<NGSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NGSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NGSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
