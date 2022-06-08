import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvellousdComponent } from './marvellousd.component';

describe('MarvellousdComponent', () => {
  let component: MarvellousdComponent;
  let fixture: ComponentFixture<MarvellousdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvellousdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvellousdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
