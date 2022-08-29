import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public sign(payLoad: {
    username: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.url}/sign`, payLoad).pipe(
      map((data) => console.log(data)),
      catchError((err) => {
        console.log(err);
        return throwError(() => err.error.message);
      })
    );
  }
}
