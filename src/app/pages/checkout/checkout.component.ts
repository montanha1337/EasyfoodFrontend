import { Component, OnInit } from '@angular/core'
import { CheckoutService } from 'src/app/pages/checkout/checkout.service'
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router'
import  {User} from '../../core/models/user.model'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

 endereco$: any
 pagamento$:any
 user: Number
 cep= new FormControl('');
 rua = new FormControl('');
 numero= new FormControl('');
 complemento =new FormControl('');
 bairro= new FormControl('');
 cidade =new FormControl('');
 pag =new FormControl(''); 
 pedido: FormGroup
 data: any = {}
 routeState: any
 endereco = []
 
 

   constructor(
     private service: CheckoutService,
     private fb: FormBuilder,
     private router: Router
     ) {
      this.user = 1
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
    this.get().then()
    this.getPagamento()
    
    
  }
  

  /**
   * Carrega lista de
   */
  private async get() {
    //this.user = 1
    this.endereco$ = await this.service.getAll(this.user)
    return this.endereco$
  }


    /**
   * Carrega lista de pagamento
   */
  private getPagamento() {
    this.pagamento$ = this.service.get()
  }
    /**
   * Cria Formulário
   */
     private createForm() {
      this.pedido = this.fb.group({
        user: this.user,
        total:this.data.total,
        pg:this.pag.value
      })
      
    }

    /**
   * Cria novo Pedido
   */
     FinalizaPedido( pg:any) {
       this.createForm()
      if (this.pedido)
        this.service
          .post(this.pedido.value)
          .subscribe(() => this.router.navigate(['/']))
    }
    selectItem(item: any) {
      console.log(this.endereco)
  
      this.endereco.push(item)
    }
  
}


