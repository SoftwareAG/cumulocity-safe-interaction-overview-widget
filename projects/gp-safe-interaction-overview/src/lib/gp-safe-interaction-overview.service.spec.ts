import { TestBed } from '@angular/core/testing';

import { GpSafeInteractionOverviewService } from './gp-safe-interaction-overview.service';

describe('GpSafeInteractionOverviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GpSafeInteractionOverviewService = TestBed.get(GpSafeInteractionOverviewService);
    expect(service).toBeTruthy();
  });
});
