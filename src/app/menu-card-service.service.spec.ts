import { TestBed } from '@angular/core/testing';

import { MenuCardServiceService } from './menu-card-service.service';

describe('MenuCardServiceService', () => {
  let service: MenuCardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuCardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
