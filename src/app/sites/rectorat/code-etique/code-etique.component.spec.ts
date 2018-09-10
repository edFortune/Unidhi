import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeEtiqueComponent } from './code-etique.component';

describe('CodeEtiqueComponent', () => {
  let component: CodeEtiqueComponent;
  let fixture: ComponentFixture<CodeEtiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeEtiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeEtiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
