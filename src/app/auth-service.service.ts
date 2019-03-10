import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  loggedUser: string;

  constructor() {
  }

  //checks what we have in localStorage & if we have a user it returns 'user'
  checkIfLoggedIn():string {
    return localStorage.getItem('user');
  }

  //sets loggedUser to the users input in our LoginComponent
  public login(user:string):void {
    localStorage.setItem('user', user);
    this.loggedUser = user;
  }

  //deletes localStorage when you logout and sets loggedUser to undefined
  public logout(): void{
    localStorage.clear();
    this.loggedUser = undefined;
  }

}
