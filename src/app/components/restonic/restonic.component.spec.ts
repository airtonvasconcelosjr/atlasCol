import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestonicComponent } from './restonic.component';

describe('RestonicComponent', () => {
  let component: RestonicComponent;
  let fixture: ComponentFixture<RestonicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestonicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestonicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
