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

  public foodList: Array<FoodList> =  [];

  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    this.foodListService.getLista().subscribe(
      (res) => this.foodList = res,
      (error) => error
    );
    console.log('chegou aqui');

    this.foodListService.emitEvent.subscribe({
      next: (res: any) => alert(res),
      error: (err: any) => console.log(err),
    });

  }
}
