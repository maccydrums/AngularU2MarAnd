import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedUser:string;
  userName:string;

  constructor(private authServiceService: AuthService) {
    this.userName = this.authServiceService.checkIfLoggedIn();

  }

  ngOnInit() {
  }

  login() {
    let checkNumber = this.loggedUser.search(/\d+/);
    if(this.loggedUser.length >= 10 && checkNumber > 0) {
      this.authServiceService.login(this.loggedUser);
    } else {
      console.log("yours username must have atleast 10 characters and contain one number");
    }
  }

  logout() {
    this.authServiceService.logout();
  }

}
