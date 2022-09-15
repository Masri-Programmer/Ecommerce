import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustarrivedComponent } from './justarrived.component';

describe('JustarrivedComponent', () => {
  let component: JustarrivedComponent;
  let fixture: ComponentFixture<JustarrivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustarrivedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustarrivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
