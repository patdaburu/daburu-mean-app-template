import { TestBed, inject } from '@angular/core/testing';
import { EchoService } from './echo.service';
// import {expect} from 'chai';

describe('Test the EchoService.', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EchoService]
    });
  });

  it('should return an empty string when no input is provided',
    inject([EchoService], (service: EchoService) => {
      const response = service.echo('');
      expect(response).toEqual('');
    }));

  it('should be created', inject([EchoService], (service: EchoService) => {
    expect(service).toBeTruthy();
  }));

  it('should return the original string',
    inject([EchoService], (service: EchoService) => {
    const response = service.echo('testing');
    expect(response).toEqual('testing');
  }));

  it('should return the original string, but louder when requested',
    inject([EchoService], (service: EchoService) => {
    const response = service.echo('testing', true);
    expect(response).toEqual('TESTING');
  }));

});
