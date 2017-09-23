import { TestBed, inject } from '@angular/core/testing';

import { VinodService } from './vinod.service';

describe('VinodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VinodService]
    });
  });

  it('should be created', inject([VinodService], (service: VinodService) => {
    expect(service).toBeTruthy();
  }));
});
