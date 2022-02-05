import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootOptionsComponent } from './foot-options.component';

describe('FootOptionsComponent', () => {
  let component: FootOptionsComponent;
  let fixture: ComponentFixture<FootOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
