import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  private lista: Array<string> = ['X-Bacon ', 'Feijão', 'Ovo'];

  constructor() {}

  public getLista() {
    return this.lista;
  }
}
