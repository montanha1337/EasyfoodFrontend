import { Injectable } from '@angular/core'
import { ApiService } from 'src/app/core/services/api.service'
import { Observable } from 'rxjs'
import { retry, catchError } from 'rxjs/operators'
import { shareReplay, take } from 'rxjs/operators'
import { Categories } from 'src/app/core/models/categories.model'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'



@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  /**
   * Caminho da API
   */
  apiUrl: string = 'categories'

  constructor(private service: ApiService) { }

  /**
   * Carrega todos as categorias
   */
  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  getAll(): Observable<any> {
    return this.service.get(`${this.apiUrl}/buscartodos`)
      .pipe(
      )
  }

  /**
   * Carrega categoria específica
   */
  get(id: string): Observable<any> {
    return this.service.get(`${this.apiUrl}/buscarum/${id}`).pipe(take(1))
  }

  /**
   * Cria nova categoria
   */
  post(data: any): Observable<any> {
    const caminho='cadastro'
    return this.service.post(this.apiUrl,caminho, data)
  }

  /**
   * Atualiza categoria
   */
  put(body: any): Observable<any> {
    const caminho='altera'
    return this.service.put(this.apiUrl,caminho,body)
  }

  /**
   * Deleta categoria
   */
  delete(id: number): Observable<any> {
    const caminho='deletacategoria'
    return this.service.delete(`${this.apiUrl}`,caminho, id)
  }
}
