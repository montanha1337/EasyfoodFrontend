import { Injectable } from '@angular/core'
import { ApiService } from 'src/app/core/services/api.service'
import { Observable } from 'rxjs'
import { retry, catchError } from 'rxjs/operators'
import { shareReplay, take } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import {Endereco} from '../../core/models/checkout.model' 



@Injectable({
  providedIn: 'root',
})
export class LoginService {
  /**
   * Caminho da API
   */
  apiUrl: string = 'user'

  constructor(private service: ApiService) { }

  /**
   * Carrega todos as categorias
   */
  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  getAll(id: Number): Observable<Endereco> {
    return this.service.get(`${this.apiUrl}\buscartodos`)
      .pipe(
      )
  }

  /**
   * Carrega Endereço
   */
  get(): Observable<any> {
    return this.service.get(`${this.apiUrl}\login`).pipe(take(1))
  }

  /**
   * faz login
   */
  post(data: any): Observable<any> {
    const caminho='login'
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
