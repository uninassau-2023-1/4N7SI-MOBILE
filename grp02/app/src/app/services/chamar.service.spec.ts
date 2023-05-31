import { TestBed } from '@angular/core/testing';

import { ChamarService } from './chamar.service';


describe('ChamarService', () => {
  let service: ChamarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChamarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
