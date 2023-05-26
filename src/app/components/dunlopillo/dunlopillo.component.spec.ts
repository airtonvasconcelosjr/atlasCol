import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DunlopilloComponent } from './dunlopillo.component';

describe('DunlopilloComponent', () => {
  let component: DunlopilloComponent;
  let fixture: ComponentFixture<DunlopilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DunlopilloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DunlopilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
