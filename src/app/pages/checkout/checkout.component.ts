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
 pedido: FormGroup
 

   constructor(
     private service: CheckoutService,
     private fb: FormBuilder,
     private router: Router
     ) {}

  /**
   * Inicialização
   */
  ngOnInit() {
    this.get().then()
    this.getPagamento()
    this.createForm()
    
    
  }

  /**
   * Carrega lista de
   */
  private async get() {
    this.user = 1
    this.endereco$ = await this.service.getAll(this.user)
    return this.endereco$
  }
  updateValue() {
    
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
    // this.ende$ = this.fb.group({
    //   idendereco:this.endereco$.Id,
    //   rua: ['', Validators.required],
    //   complemento: ['', Validators.required],
    //   bairro: ['', Validators.required],
    //   numero: ['', Validators.required],
    //   cidade: ['', Validators.required],
    // })
    // this.pagamento = this.fb.group({
    //   idpagamento:this.pagamento$.id,
    //   pg: ['', Validators.required],
    // })
    this.pedido = this.fb.group({
      user: ['', Validators.required],
      idendereco:this.cep,
      pg: this.getPagamento(),
    })
  }
    /**
   * Cria novo Pedido
   */
     submit() {
      if (this.pedido.valid)
        this.service
          .post(this.pedido.value)
          .subscribe(() => this.router.navigate(['/']))
      else
        Object.keys(this.pedido.controls).forEach(campo =>
          this.pedido.get(campo).markAsTouched()
        )
    }
  
}


