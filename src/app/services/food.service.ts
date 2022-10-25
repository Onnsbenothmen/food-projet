import { Injectable } from '@angular/core';
import {food} from '../model/food.model';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  food : food[];
  Food!: food;
  //Food: food = new food;
  constructor() {
    this.food = [
      {idfood : 1, nomfood : "pizza", prixfood : 12000, dateCreation : new Date("01/14/2011")},
      {idfood : 2, nomfood : "kosksi", prixfood : 50000, dateCreation : new Date("12/17/2010")},
      {idfood : 3, nomfood :"gâteau", prixfood : 65000, dateCreation : new Date(" 01/01/2022")}
    ];

   }
listefood():food[]{
  return this.food;
}
ajouterfood(food : food){
  this.food.push(food);
}

supprimerfood( food : food){
  //supprimer le produit prod du tableau produits
  const index = this.food.indexOf(food, 0);
  if (index > -1) {
  this.food.splice(index, 1);
  }
  //ou Bien
  /* this.food.forEach((cur, index) => {
  if(prod.idfood === cur.idfood) {
  this.food.splice(index, 1);
  }
  }); */
  }
  consulterfood(id:number): food{
   this.Food = this.food.find(p => p.idfood== id)!;
    return this.Food;
    }
    updatefood(p:food)
{
      // console.log(p);
      this.supprimerfood(p);
      this.ajouterfood(p);
      this.trierfood();   
}
trierfood(){
  this.food = this.food.sort((n1,n2) => {
  if (n1.idfood!>n2.idfood!){
       return 1;
  }
  if (n1.idfood! < n2.idfood!) {
       return -1;
  }
  return 0;
  }
  );}

}
