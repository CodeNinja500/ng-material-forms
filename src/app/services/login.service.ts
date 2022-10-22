import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginModel} from "../models/login.model";

@Injectable()
export class LoginService {
  constructor(private _httpClient: HttpClient) { }

  logIn(user: LoginModel): Observable<string> {
    return this._httpClient.post<string>('https://fakestoreapi.com/auth/login',user);
  }
}
