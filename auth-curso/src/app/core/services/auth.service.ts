import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = 'http://localhost:3000';

  private ACESS_TOKEN: string = 'acess_token';

  constructor(private http: HttpClient, private router: Router) {}

  public sign(payLoad: {
    username: string;
    password: string;
  }): Observable<any> {
    return this.http.post<{ token: string }>(`${this.url}/sign`, payLoad).pipe(
      map((res) => {
        localStorage.removeItem(this.ACESS_TOKEN);
        localStorage.setItem(this.ACESS_TOKEN, JSON.stringify(res.token));
        console.log(res);
        this.router.navigate(['admin']);
      }),
      catchError((e) => {
        console.log(e);

        if (e.error.message) return throwError(() => e.error.message);

        return throwError(() => 'Serviço de autenticação indisponível!');
      })
    );
  }

  public logoff() {
    localStorage.removeItem(this.ACESS_TOKEN);
    this.router.navigate(['']);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem(this.ACESS_TOKEN);
    if (!token) return false;

    const jwtHelper = new JwtHelperService();
    if (jwtHelper.isTokenExpired(token)) return false;

    return true;
  }
}
