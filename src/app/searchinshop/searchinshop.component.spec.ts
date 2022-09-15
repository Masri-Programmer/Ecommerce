import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchinshopComponent } from './searchinshop.component';

describe('SearchinshopComponent', () => {
  let component: SearchinshopComponent;
  let fixture: ComponentFixture<SearchinshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchinshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchinshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
