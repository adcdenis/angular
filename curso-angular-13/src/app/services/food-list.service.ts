import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  private lista: Array<string> = ['X-Bacon ', 'Feijão', 'Ovo'];

  public emitEvent = new EventEmitter();

  private url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  // public getLista() {
  //   return this.lista;
  // }

  public getLista(): Observable<Array<FoodList>> {
    return this.http.get<Array<FoodList>>(`${this.url}list-food`).pipe(
      (res) => res,
      (error) => error
    );
  }

  public foodListAlert(valor: string) {
    this.emitEvent.emit(valor);
  }

  public foodListAdd(valor: string): Observable<FoodList> {
    return this.http
      .post<FoodList>(`${this.url}list-food`, { nome: valor })
      .pipe(
        (res) => res,
        (error) => error
      );
  }

  public foodListPut(valor: string, id: number): Observable<FoodList> {
    return this.http
      .put<FoodList>(`${this.url}list-food/${id}`, { nome: valor })
      .pipe(
        (res) => res,
        (error) => error
      );
  }

  public foodListDelete(id: number): Observable<FoodList> {
    return this.http.delete<FoodList>(`${this.url}list-food/${id}`).pipe(
      (res) => res,
      (error) => error
    );
  }
}
