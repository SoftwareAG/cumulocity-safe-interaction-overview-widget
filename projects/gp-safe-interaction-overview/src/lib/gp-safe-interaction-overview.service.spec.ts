import { TestBed } from '@angular/core/testing';

import { GpLibSafeInteractionOverviewService } from './gp-safe-interaction-overview.service';

describe('GpLibSafeInteractionOverviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GpLibSafeInteractionOverviewService = TestBed.get(GpLibSafeInteractionOverviewService);
    expect(service).toBeTruthy();
  });
});
