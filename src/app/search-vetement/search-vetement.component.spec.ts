import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVetementComponent } from './search-vetement.component';

describe('SearchVetementComponent', () => {
  let component: SearchVetementComponent;
  let fixture: ComponentFixture<SearchVetementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchVetementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchVetementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
