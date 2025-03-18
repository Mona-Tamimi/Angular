import { Component } from '@angular/core';
import { UrlService } from '../service/url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {


  ngOnInit() { }

  constructor(private _url : UrlService , private _route : Router) { }


  postData( data:any) {

    this._url.postNewUser(data).subscribe(() => {
      alert("add new user");
      this._route.navigate(['/signIn'])
    })

  }
}
