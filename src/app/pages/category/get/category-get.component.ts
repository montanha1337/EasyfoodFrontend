import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { CategoryService } from '../category.service'

@Component({
  selector: 'app-category-get',
  templateUrl: './category-get.component.html',
  styleUrls: ['../../../../assets/scss/table.scss'],
})
export class CategoryGetComponent implements OnInit {
  /**
   * Lista de categorias
   */
  categories$: Observable<any>

  constructor(private service: CategoryService) { }

  /**
   * Inicialização
   */
  ngOnInit() {
    this.get()
  }

  /**
   * Carrega lista de categorias
   */
  private get() {
    this.categories$ = this.service.getAll()
  }

  /**
   * Remove categoria
   * @param id Código do registro
   */
   delete(IdCategoria: number, nome: string) {
    if (confirm('Deseja remover a categoria ' + nome + '?'))
      this.service.delete(IdCategoria).subscribe(() => this.get())
  }
  
}

