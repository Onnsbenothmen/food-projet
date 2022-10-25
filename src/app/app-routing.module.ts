import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { foodComponent } from './food/food.component';
import { AadFoodComponent } from './aad-food/aad-food.component';
import { UpdateFoodComponent } from './update-food/update-food.component';
const routes: Routes = [
  {path: "FOOD", component : foodComponent},
  {path: "aad-food", component : AadFoodComponent},
  {path: "", redirectTo: "food", pathMatch: "full"},
  {path: "updatefood/:id", component: UpdateFoodComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
