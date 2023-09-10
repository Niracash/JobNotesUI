import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovedJobComponent } from './removed-job.component';

describe('RemovedJobComponent', () => {
  let component: RemovedJobComponent;
  let fixture: ComponentFixture<RemovedJobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemovedJobComponent]
    });
    fixture = TestBed.createComponent(RemovedJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
