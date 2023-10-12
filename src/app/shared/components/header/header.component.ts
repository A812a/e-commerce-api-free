import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthServiceService } from 'src/app/auth/services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isLoggin:boolean = false

  constructor(private auth:AuthServiceService, private router:Router) {
    this.auth.userData.subscribe(res => {
      console.log(res)
      if(this.auth.userData.getValue()) {
        this.isLoggin = true
      } else {
        this.isLoggin = false
      }
    })
  }

  logout() {
    localStorage.removeItem('userToken')
    this.auth.userData.next(null)
    this.router.navigate(['/login'])
  }

}
