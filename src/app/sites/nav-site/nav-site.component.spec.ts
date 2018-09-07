import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSiteComponent } from './nav-site.component';

describe('NavSiteComponent', () => {
  let component: NavSiteComponent;
  let fixture: ComponentFixture<NavSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
