import { instance, mock } from 'ts-mockito';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth-service.service';

describe('AuthServiceService', () => {
  let uut: AuthService;
  let httpClientMock: HttpClient;

  beforeEach(() => {
    httpClientMock = mock<HttpClient>();
    uut = new AuthService(instance(httpClientMock));
  });

  it('should be created', () => {
    expect(uut).toBeTruthy();
  });
});
