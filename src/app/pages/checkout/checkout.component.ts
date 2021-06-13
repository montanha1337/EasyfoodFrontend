import { Component, OnInit } from '@angular/core'
import { CheckoutService } from 'src/app/pages/checkout/checkout.service'
import { Router } from '@angular/router'
import { FormControl } from '@angular/forms'
import { User } from '../../core/models/user.model'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  data: any = {}
  checkout$: any
  pagamento$: any
  user: number
  routeState: any


  constructor(private service: CheckoutService, private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.routeState = this.router.getCurrentNavigation().extras.state
      if (this.routeState) {
        this.data.total = this.routeState.total ? this.routeState.total : 0
        this.data.produtos = this.routeState.produtos ? this.routeState.produtos : []
      }
    }
  }


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

