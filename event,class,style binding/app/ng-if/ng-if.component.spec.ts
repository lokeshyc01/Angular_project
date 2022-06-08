import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGIFComponent } from './ng-if.component';

describe('NGIFComponent', () => {
  let component: NGIFComponent;
  let fixture: ComponentFixture<NGIFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NGIFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NGIFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
