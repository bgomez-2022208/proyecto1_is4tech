import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DogsServiceService } from './dogs-service.service';
import { HttpClient } from '@angular/common/http';

describe('DogsServiceService', () => {
  let service: DogsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DogsServiceService]
    });
    service = TestBed.inject(DogsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
