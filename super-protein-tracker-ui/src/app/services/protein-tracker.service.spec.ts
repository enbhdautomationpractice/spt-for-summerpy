import { TestBed } from '@angular/core/testing';

import { ProteinTrackerService } from './protein-tracker.service';

describe('ProteinTrackerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProteinTrackerService = TestBed.get(ProteinTrackerService);
    expect(service).toBeTruthy();
  });
});
