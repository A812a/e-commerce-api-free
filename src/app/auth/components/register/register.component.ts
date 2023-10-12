import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isLoading:boolean = false;
  apiError:string = ''

  constructor(private service:AuthServiceService, private router:Router){}

  registerForm:FormGroup = new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl(),
    password:new FormControl(),
    rePassword:new FormControl(),
    phone:new FormControl()
  })

  register(form:FormGroup) {
    this.isLoading = true;

    if(form.valid) {
      this.service.login(form.value).subscribe({
        next: (res:any) => {
          console.log(res)
          this.isLoading = false;
          this.router.navigate(['/login'])
        },
        error: (error) => {
          this.apiError = error.error.message
        }
      })
    }
  }

}
