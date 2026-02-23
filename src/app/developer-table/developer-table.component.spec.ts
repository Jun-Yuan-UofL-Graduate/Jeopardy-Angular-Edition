import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperTableComponent } from './developer-table.component';

describe('DeveloperTableComponent', () => {
  let component: DeveloperTableComponent;
  let fixture: ComponentFixture<DeveloperTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloperTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
