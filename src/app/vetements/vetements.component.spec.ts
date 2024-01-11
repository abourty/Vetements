import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetementComponent } from './vetements.component';

describe('VetementsComponent', () => {
  let component: VetementComponent;
  let fixture: ComponentFixture<VetementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VetementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
