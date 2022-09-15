import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchforcategoriesComponent } from './searchforcategories.component';

describe('SearchforcategoriesComponent', () => {
  let component: SearchforcategoriesComponent;
  let fixture: ComponentFixture<SearchforcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchforcategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchforcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
