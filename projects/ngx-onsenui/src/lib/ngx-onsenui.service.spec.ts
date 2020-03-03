import { TestBed } from '@angular/core/testing';

import { NgxOnsenuiService } from './ngx-onsenui.service';

describe('NgxOnsenuiService', () => {
  let service: NgxOnsenuiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxOnsenuiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
