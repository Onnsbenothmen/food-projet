import { Component, OnInit } from '@angular/core';
import { food } from '../model/food.model';
import { ActivatedRoute,Router } from '@angular/router';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styles: [
  ]
})
export class UpdateFoodComponent implements OnInit {
  currentfood = new food();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private foodService: FoodService) { }

  ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot.params['id']);
    this.currentfood = this.foodService.consulterfood(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentfood);
  }
  updatefood(){
    //console.log(this.currentfood);
    this.foodService.updatefood(this.currentfood);
    this.router.navigate(['food']);
  }

}
