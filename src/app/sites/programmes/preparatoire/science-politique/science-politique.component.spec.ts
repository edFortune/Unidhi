import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SciencePolitiqueComponent } from './science-politique.component';

describe('SciencePolitiqueComponent', () => {
  let component: SciencePolitiqueComponent;
  let fixture: ComponentFixture<SciencePolitiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SciencePolitiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SciencePolitiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
