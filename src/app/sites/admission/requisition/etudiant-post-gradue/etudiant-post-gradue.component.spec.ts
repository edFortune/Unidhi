import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantPostGradueComponent } from './etudiant-post-gradue.component';

describe('EtudiantPostGradueComponent', () => {
  let component: EtudiantPostGradueComponent;
  let fixture: ComponentFixture<EtudiantPostGradueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantPostGradueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantPostGradueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
