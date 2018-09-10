import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantPreparatoireComponent } from './etudiant-preparatoire.component';

describe('EtudiantPreparatoireComponent', () => {
  let component: EtudiantPreparatoireComponent;
  let fixture: ComponentFixture<EtudiantPreparatoireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantPreparatoireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantPreparatoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
