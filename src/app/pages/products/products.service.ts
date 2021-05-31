import { Injectable } from '@angular/core'
import { ApiService } from 'src/app/core/services/api.service'
import { Observable } from 'rxjs'
import { shareReplay, take } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  /**
   * Caminho da API
   */
  apiUrl: string = 'produto'

  constructor(private service: ApiService) {}

  /**
   * Carrega todos os produtos
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
   * Carrega produto específico
   */
  get(id: string): Observable<any> {
    return this.service.get(`${this.apiUrl}/${id}`).pipe(take(1))
  }

  /**
   * Cria novo produto
   */
  post(data: object): Observable<any> {
    const caminho = "cadastro"
    return this.service.post(this.apiUrl,caminho, data)
  }

  /**
   * Atualiza produto
   */
  put(data: any): Observable<any> {
    return this.service.put(this.apiUrl, data.id, data)
  }

  /**
   * Deleta produto
   */
  delete(id: number): Observable<any> {
    const caminho= 'deletaproduto'
    return this.service.delete(`${this.apiUrl}`,caminho, id)
  }
}
