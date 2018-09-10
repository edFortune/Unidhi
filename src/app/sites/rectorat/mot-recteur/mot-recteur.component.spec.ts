import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotRecteurComponent } from './mot-recteur.component';

describe('MotRecteurComponent', () => {
  let component: MotRecteurComponent;
  let fixture: ComponentFixture<MotRecteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotRecteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotRecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
