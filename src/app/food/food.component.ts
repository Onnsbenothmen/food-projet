import { Component, OnInit } from '@angular/core';
import { food } from '../model/food.model';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class foodComponent implements OnInit {
  food : food[];
  constructor(private foodService : FoodService) {
    this.food = foodService.listefood();
  }

  ngOnInit(): void {
  }
  supprimerfood(food:food){
    //console.log(food);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.foodService.supprimerfood(food);
  }
  




}
