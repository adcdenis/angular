import { FoodList } from './../../module/food-list';
import { getTestBed } from '@angular/core/testing';
import { FoodListService } from './../../services/food-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  public foodList: Array<FoodList> = [];

  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    this.foodListService.getLista().subscribe(
      (res) => (this.foodList = res),
      (error) => error
    );

    this.foodListService.emitEvent.subscribe({
      next: (res: FoodList) => {
        //alert(res.nome);
        return this.foodList.push(res);
      },
      error: (err: any) => console.log(err),
    });
  }

  public delete(id: number) {
    this.foodListService.foodListDelete(id).subscribe({
      next: (res: FoodList) => {
        return (this.foodList = this.foodList.filter((item) => {
          return id !== item.id;
        }));
      },
      error: (err: any) => console.log(err),
    });
  }

  public edit(food: FoodList) {
    this.foodListService.foodListPut(food.nome, food.id).subscribe({
      next: (res: FoodList) => console.log(res),
      error: (err: any) => console.log(err),
    });
  }
}
