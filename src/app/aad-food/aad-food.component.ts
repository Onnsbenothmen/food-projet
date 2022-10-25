import { Component, OnInit } from '@angular/core';
import { food } from '../model/food.model';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-aad-food',
  templateUrl: './aad-food.component.html',
  styleUrls: ['./aad-food.component.css']
})
export class AadFoodComponent implements OnInit {

  newfood = new food();
  message : string="";
  constructor(private foodService : FoodService) { }

  ngOnInit(): void {

  }
  aadfood(){
    //console.log(this.newfood);
  }

}
