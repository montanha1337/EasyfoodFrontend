import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'

import { LoginService } from './login.service'

@Component({  
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 form: FormGroup 

  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private router: Router
  ) {}

 
  ngOnInit() {
    this.createForm()
  }


  private createForm() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }


  submit() {
    if (this.form.valid)
      this.service
        .post(this.form.value)
        .subscribe(() => this.router.navigate(['/']))
    else
      Object.keys(this.form.controls).forEach(campo =>
        this.form.get(campo).markAsTouched()
      )
  }
}
