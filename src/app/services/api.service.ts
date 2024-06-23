import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
  }

  signup(signupData: {
    name: string;
    email: string;
    password: string;
    phone: string;
    gender: string;
  }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, signupData);
  }
}