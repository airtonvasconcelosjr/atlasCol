import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercosulComponent } from './mercosul.component';

describe('MercosulComponent', () => {
  let component: MercosulComponent;
  let fixture: ComponentFixture<MercosulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercosulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MercosulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
