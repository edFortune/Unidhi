import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceAdministrativeComponent } from './science-administrative.component';

describe('ScienceAdministrativeComponent', () => {
  let component: ScienceAdministrativeComponent;
  let fixture: ComponentFixture<ScienceAdministrativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScienceAdministrativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceAdministrativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
