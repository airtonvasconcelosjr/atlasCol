import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoflexComponent } from './ecoflex.component';

describe('EcoflexComponent', () => {
  let component: EcoflexComponent;
  let fixture: ComponentFixture<EcoflexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcoflexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcoflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
