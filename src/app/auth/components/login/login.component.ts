import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLoading:boolean = false;
  apiError:string = ''

  constructor(private service:AuthServiceService, private router:Router) {}

  loginFrom:FormGroup = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })

login(form:FormGroup) {
  this.isLoading = true

  if(form.valid) {
    this.service.login(form.value).subscribe({
      next: (res:any) => {
        console.log(res)
        this.isLoading = false;
        localStorage.setItem('userToken', res.token)
        console.log(localStorage.getItem('userToken'))
        this.service.getUserData()
        this.router.navigate(['/products'])
      },
      error: (error) => {
        this.apiError = error.error.message
      }
    })
  }
}


}
