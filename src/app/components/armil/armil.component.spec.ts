import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmilComponent } from './armil.component';

describe('ArmilComponent', () => {
  let component: ArmilComponent;
  let fixture: ComponentFixture<ArmilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
