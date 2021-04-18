import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ApiService } from 'src/app/core/services/api.service'

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private service: ApiService) {

  }
  post(data: object): Observable<any> {
    return this.service.post('orders', data)
  }

}
