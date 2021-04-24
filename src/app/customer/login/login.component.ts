import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/lib/base-component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {
  public registerForm: FormGroup;
  public loginForm: FormGroup;
 
  constructor(injector: Injector) {
    super(injector);
   }
   ngOnInit(): void {
    this.registerForm = new FormGroup({
      customer_email: new FormControl('', [Validators.required,Validators.email]),
      customer_password: new FormControl('', [Validators.required,Validators.minLength(6),]),
    });
    this.loginForm = new FormGroup({
      customer_email: new FormControl('', Validators.required),
      customer_password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      remember: new FormControl(false, []),
    });
  }
  onSubmitLogin(value: any) { 
    alert('Đăng nhập thành công');

  }
  onSubmitRegister(value: any) { 

    this._api.post('/api/khachhang/create-item', {customer_email:value.customer_email, customer_password:value.customer_password} ).takeUntil(this.unsubscribe).subscribe(res => {
     alert('Đăng ký thành công');
      }, err => { });      

  }

}