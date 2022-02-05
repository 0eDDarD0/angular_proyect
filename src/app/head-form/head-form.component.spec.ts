import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadFormComponent } from './head-form.component';

describe('HeadFormComponent', () => {
  let component: HeadFormComponent;
  let fixture: ComponentFixture<HeadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
