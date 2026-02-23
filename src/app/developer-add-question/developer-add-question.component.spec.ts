import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperAddQuestionComponent } from './developer-add-question.component';

describe('DeveloperAddQuestionComponent', () => {
  let component: DeveloperAddQuestionComponent;
  let fixture: ComponentFixture<DeveloperAddQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloperAddQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperAddQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
