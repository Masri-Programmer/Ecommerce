import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterinshopComponent } from './filterinshop.component';

describe('FilterinshopComponent', () => {
  let component: FilterinshopComponent;
  let fixture: ComponentFixture<FilterinshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterinshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterinshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
