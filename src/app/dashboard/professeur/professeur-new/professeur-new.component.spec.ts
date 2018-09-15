import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesseurNewComponent } from './professeur-new.component';

describe('ProfesseurNewComponent', () => {
  let component: ProfesseurNewComponent;
  let fixture: ComponentFixture<ProfesseurNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesseurNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesseurNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
