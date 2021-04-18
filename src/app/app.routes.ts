import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AdminLoginComponent } from './admin/admin-login/admin-login.component'
import { FoodComponent } from './pages/food/food.component'

import { HomeComponent } from './pages/home/home.component'


const routes: Routes = [
  {
    path: '',
    component: FoodComponent,
  },
  {
    path: 'admin',
    component: AdminLoginComponent,
  },
  {
    path: 'shopping',
    loadChildren: './pages/shopping/shopping.module#ShoppingModule',
  },
  {
    path: 'order',
    loadChildren: './pages/order/order.module#OrderModule',
  },
  {
    path: 'category',
    loadChildren: './pages/category/category.module#CategoryModule',
  },
  {
    path: 'products',
    loadChildren: './pages/products/products.module#ProductsModule',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutesModule { }
