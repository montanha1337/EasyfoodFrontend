import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { throwError, Observable } from 'rxjs'
import { catchError, finalize } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  isLoading: boolean

  constructor(private http: HttpClient) {}

  private formatErrors(error: any) {
    return throwError(error.error)
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    this.isLoading = true

    return this.http
      .get(`${environment.api_url}${path}`, { params })
      .pipe(finalize(() => (this.isLoading = false)))
  }

  put(path: string,caminho: String, body: object): Observable<any> {
    return this.http
      .put(`${environment.api_url}${path}/${caminho}`, body)
      .pipe(catchError(this.formatErrors))
  }

  post(path: string, caminho : string, body: object): Observable<any> {
    return this.http
      .post(`${environment.api_url}${path}/${caminho}`, body)
      .pipe(catchError(this.formatErrors))
  }

  delete(path: string, caminho: String, id: number): Observable<any> {
    return this.http
      .delete(`${environment.api_url}${path}/${caminho}/${id}`)
      .pipe(catchError(this.formatErrors))
  }
  login(path: string, caminho : string, body: object): Observable<any> {
    return this.http
      .post(`${environment.api_url}${path}/${caminho}`, body)
      .pipe(catchError(this.formatErrors))
  }
}
