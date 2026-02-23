import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperUpdateQuestionComponent } from './developer-update-question.component';

describe('DeveloperUpdateQuestionComponent', () => {
  let component: DeveloperUpdateQuestionComponent;
  let fixture: ComponentFixture<DeveloperUpdateQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloperUpdateQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperUpdateQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
