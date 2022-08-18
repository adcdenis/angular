import { FoodListService } from './../../services/food-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss'],
})
export class FoodAddComponent implements OnInit {
  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {}

  public adicionarValorInput(valor: string) {
    return this.foodListService.foodListAdd(valor).subscribe({
      next: (res: any) => console.log(res),
      error: (err: any) => console.log(err),
    });
  }
}
