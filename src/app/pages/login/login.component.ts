import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { LoginService } from './login.service'
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup
  private fb: FormBuilder
  private service: LoginService
  private router: Router

  constructor() { 
  
  }

  ngOnInit() {
    this.login()
  }


  private login() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  submit() {
    if (this.form.valid)
      this.service
        .get(this.form.value)
        .subscribe(() => this.router.navigate(['/']))
    else
      Object.keys(this.form.controls).forEach(campo =>
        this.form.get(campo).markAsTouched()
      )
  }

}
