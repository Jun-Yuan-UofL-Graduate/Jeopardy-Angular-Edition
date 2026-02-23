import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperViewQuestionComponent } from './developer-view-question.component';

describe('DeveloperViewQuestionComponent', () => {
  let component: DeveloperViewQuestionComponent;
  let fixture: ComponentFixture<DeveloperViewQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloperViewQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperViewQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
