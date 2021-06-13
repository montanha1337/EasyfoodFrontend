import { Injectable } from '@angular/core'
import { ApiService } from 'src/app/core/services/api.service'
import { Observable } from 'rxjs'
import { retry, catchError } from 'rxjs/operators'
import { shareReplay, take } from 'rxjs/operators'
import { Checkout } from 'src/app/core/models/checkout.model'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'



@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  /**
   * Caminho da API
   */
  apiUrl: string = 'checkout'

  constructor(private service: ApiService) { }

  /**
   * Carrega todos as categorias
   */
  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  getAll(id: Number): Observable<any> {
    return this.service.get(`${this.apiUrl}/consultaendereco/`+id)
      .pipe(
      )
  }

  /**
   * Carrega Endereço
   */
  get(): Observable<any> {
    return this.service.get(`${this.apiUrl}/consultapg`).pipe(take(1))
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
