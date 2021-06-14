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
 pedido =[]
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
    Endereco() {
    if(this.rua 
      &&this.numero 
      &&this.complemento 
      &&this.bairro
      &&this.cidade){
        this.endereco.push(this.rua)
      this.endereco.push(this.numero) 
      this.endereco.push(this.complemento) 
      this.endereco.push(this.bairro)
      this.endereco.push(this.cidade)
    }else
    this.endereco.push(this.endereco$)
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

    /**
   * Cria novo Pedido
   */
     FinalizaPedido( pg:any) {
      this.pedido.push('user:'+this.user)
      this.pedido.push('total:'+this.data.total)
      this.pedido.push('pg:'+ this.pag.value)
      console.log(this.pedido)
      if (this.pedido)
        this.service
          .post(this.pedido)
          .subscribe(() => this.router.navigate(['/']))
    }
    selectItem(item: any) {
      console.log(this.endereco)
  
      this.endereco.push(item)
    }
  
}


