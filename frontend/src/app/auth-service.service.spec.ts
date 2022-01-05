import { instance, mock, when } from 'ts-mockito';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth-service.service';
import * as faker from 'faker';

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

  fit('should ', () => {
    const credentials = {  email: faker.random.word(), password: faker.random.word()};
    when(httpClientMock.post('/accounts/login', credentials)).thenResolve();
    uut.login(credentials);
    expect(uut.loggedIn).toBeTrue();
  })
});
