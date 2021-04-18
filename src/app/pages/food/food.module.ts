import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FoodService } from './food.service'

@NgModule({
  declarations: [FoodModule],
  imports: [
    CommonModule,
  ],
  providers: [FoodService],
  bootstrap: [],
})
export class FoodModule { }
