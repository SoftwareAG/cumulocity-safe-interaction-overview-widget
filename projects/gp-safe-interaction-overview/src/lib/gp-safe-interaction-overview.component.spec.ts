import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpSafeInteractionOverviewComponent } from './gp-safe-interaction-overview.component';

describe('GpSafeInteractionOverviewComponent', () => {
  let component: GpSafeInteractionOverviewComponent;
  let fixture: ComponentFixture<GpSafeInteractionOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpSafeInteractionOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpSafeInteractionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
