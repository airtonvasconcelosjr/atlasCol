import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercosulNovoComponent } from './mercosul-novo.component';

describe('MercosulNovoComponent', () => {
  let component: MercosulNovoComponent;
  let fixture: ComponentFixture<MercosulNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercosulNovoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MercosulNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
