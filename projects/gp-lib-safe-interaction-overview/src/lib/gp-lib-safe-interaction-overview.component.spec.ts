import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpLibSafeInteractionOverviewComponent } from './gp-lib-safe-interaction-overview.component';

describe('GpLibSafeInteractionOverviewComponent', () => {
  let component: GpLibSafeInteractionOverviewComponent;
  let fixture: ComponentFixture<GpLibSafeInteractionOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpLibSafeInteractionOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpLibSafeInteractionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
