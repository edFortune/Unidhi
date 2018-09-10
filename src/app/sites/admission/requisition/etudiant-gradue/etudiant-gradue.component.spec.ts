import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantGradueComponent } from './etudiant-gradue.component';

describe('EtudiantGradueComponent', () => {
  let component: EtudiantGradueComponent;
  let fixture: ComponentFixture<EtudiantGradueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantGradueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantGradueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
