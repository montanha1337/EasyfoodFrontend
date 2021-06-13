import { Component, OnInit } from '@angular/core'
import { CheckoutService } from 'src/app/pages/checkout/checkout.service'
import  {User} from '../../core/models/user.model'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

 checkout$: any
 pagamento$:any
 user: Number
 

   constructor(private service: CheckoutService) { }

  /**
   * Inicialização
   */
  ngOnInit() {
    this.get()
    this.getPagamento()
  }

  /**
   * Carrega lista de 
   */
  private get() {
    this.user = 1
    this.checkout$ = this.service.getAll(this.user)
  }
  private getPagamento() {
    this.pagamento$ = this.service.get()
  }
  

  /**
   * Remove categoria
   * @param id Código do registro
   */
  delete(Idcheckout: number) {
    if (confirm('Deseja remover  o endereço?'))
      this.service.delete(Idcheckout).subscribe(() => this.get())
  }
}

