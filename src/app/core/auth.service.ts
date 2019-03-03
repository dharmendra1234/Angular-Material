import { Injectable } from '@angular/core';
import { User } from './user';
import { AuthData } from './auth-data';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authChange = new Subject<boolean>();

  private user: User;

  registerUser(autData: AuthData){
    this.user = {
      email: 'email',
      userId:  '12'
    };
    this.authChange.next(true);
  }

  login(authData: AuthData){
    this.user ={
      email: 'email',
      userId: '12'
    };
    this.authChange.next(true);
  }

  logout(){
    this.user=null;
    this.authChange.next(false);
  }

  getUser(){
    return {...this.user };
  }

  isAuth() {
    return this.user != null;
  }
}
