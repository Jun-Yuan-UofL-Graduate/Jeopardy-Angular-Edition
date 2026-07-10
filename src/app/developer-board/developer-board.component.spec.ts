import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperBoardEditorComponent } from './developer-board.component';

describe('DeveloperBoardEditorComponent', () => {
  let component: DeveloperBoardEditorComponent;
  let fixture: ComponentFixture<DeveloperBoardEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloperBoardEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperBoardEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
