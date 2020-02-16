import { TestBed } from '@angular/core/testing';

import { GeolocalizationService } from './geolocalization.service';

describe('GeolocalizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeolocalizationService = TestBed.get(GeolocalizationService);
    expect(service).toBeTruthy();
  });
});
