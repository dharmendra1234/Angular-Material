import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit() {
  }


  onSubmit(form: NgForm){
    console.log(form);
    this.authService.registerUser({
     // email: form.value.email,
      //password: form.value.password
      email: 'test',
      password: 'password'
    })
  

}

}
