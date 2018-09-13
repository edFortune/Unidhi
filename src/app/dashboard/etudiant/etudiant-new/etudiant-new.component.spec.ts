import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantNewComponent } from './etudiant-new.component';

describe('EtudiantNewComponent', () => {
  let component: EtudiantNewComponent;
  let fixture: ComponentFixture<EtudiantNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
