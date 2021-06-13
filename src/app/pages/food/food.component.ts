import { Component, OnInit } from '@angular/core'
import { FoodService } from './food.service'
import { ProductsService } from '../products/products.service'
import { CategoryService } from '../category/category.service'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-shopping',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
@Injectable({
  providedIn: 'root'
})
export class FoodComponent implements OnInit {
  /**
   * Lista de produtos
   */
  products$: Observable<any>
  /**
   * Lista de categorias
   */
  categories$: Observable<any>
  /**
   * Lista de itens do pedido
   */
  selectedItems = []

  /**
   * Valor total a pagar
   */
  totalPrice: number = 0

  constructor(
    private service: FoodService,
    private productsService: ProductsService,
    private categoryService: CategoryService,
    private router: Router,
  ) { }

  /**
   * Inicialização
   */
  ngOnInit() {
    this.getCategories()

    this.getProducts()
  }

  /**
   * Carrega lista de produtos
   */
  routeToCheckout() {
    this.router.navigate(['/checkout/'], {
      state: {
        produtos: this.selectedItems,
        total: this.totalPrice,
      }
    })
  }
  private getProducts() {
    this.products$ = this.productsService.getAll()
  }

  /**
   * Carrega lista de produtos
   */
  private getCategories() {
    this.categories$ = this.categoryService.getAll()
  }

  /**
   * Seleciona produto
   */
  selectItem(item: any) {
    console.log(this.selectedItems)

    this.selectedItems.push(item)

    this.totalPrice += parseInt(item.Valor)
  }

  /**
   * Remove item do pedido
   */
  removeItem(index: number) {
    this.selectedItems = this.selectedItems.filter((p, i) => {
      if (i === index) this.totalPrice -= parseInt(p.Valor)
      return i !== index
    })
  }

  /**
   * Finaliza pedido
   */
  finishOrder() {
    const order = {
      totalPrice: this.totalPrice,
      user: 'admin',
      idCategory: this.selectedItems.map(p => p.id),
    }

    this.service.post(order).subscribe(() => {
      this.totalPrice = 0

      this.selectedItems = []
    })
  }
}

