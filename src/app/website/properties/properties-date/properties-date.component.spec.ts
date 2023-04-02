import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesDateComponent } from './properties-date.component';

describe('PropertiesDateComponent', () => {
  let component: PropertiesDateComponent;
  let fixture: ComponentFixture<PropertiesDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertiesDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
