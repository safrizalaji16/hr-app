import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTitleEditComponent } from './job-title-edit.component';

describe('JobTitleEditComponent', () => {
  let component: JobTitleEditComponent;
  let fixture: ComponentFixture<JobTitleEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobTitleEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobTitleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
