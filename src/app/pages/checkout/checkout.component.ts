import { Component, OnInit } from '@angular/core'
import { CheckoutService } from 'src/app/pages/checkout/checkout.service'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

 checkout$: any

   constructor(private service: CheckoutService) { }

  /**
   * Inicialização
   */
  ngOnInit() {
    this.get()
  }

  /**
   * Carrega lista de 
   */
  private get() {
    this.checkout$ = this.service.getAll()
  }

  /**
   * Remove categoria
   * @param id Código do registro
   */
  delete(Idcheckout: number, nome : String) {
    if (confirm('Deseja remover  a categoria '+ nome+'?'))
      this.service.delete(Idcheckout).subscribe(() => this.get())
  }
}

