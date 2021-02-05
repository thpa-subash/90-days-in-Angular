import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubashComponent } from './subash.component';

describe('SubashComponent', () => {
  let component: SubashComponent;
  let fixture: ComponentFixture<SubashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
