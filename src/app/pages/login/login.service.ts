import { ApiService } from 'src/app/core/services/api.service'
import { HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

export class LoginService {
    /**
     * Caminho da API
     */
    apiUrl: string = 'user'
  
    constructor(private service: ApiService) { }
  

    // Headers
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    post(body): Observable<any> {
        const caminho = "login"
      return this.service.login(`${this.apiUrl}`,caminho,body)
        .pipe(
        )
    }
    
}