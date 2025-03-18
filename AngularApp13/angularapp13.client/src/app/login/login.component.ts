import { Component } from '@angular/core';
import { UrlService } from '../service/url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private _url : UrlService, private _route : Router) { }

  ngOnInit() { }


  usersData :any
  getData(enteredUser :any) {
    this._url.getAllUsers().subscribe((data) => {
      let user = data.find((p: any) => p.Email == enteredUser.Email && p.password == enteredUser.password);

      if (user) {
        alert("login successfully")
        this._route.navigate(['/home'])
      } else {
        alert("Invalid Email or password ")

      }

    })
  }
}
