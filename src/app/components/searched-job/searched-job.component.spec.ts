import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedJobComponent } from './searched-job.component';

describe('SearchedJobComponent', () => {
  let component: SearchedJobComponent;
  let fixture: ComponentFixture<SearchedJobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchedJobComponent]
    });
    fixture = TestBed.createComponent(SearchedJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
