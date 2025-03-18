import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


// inject to service anywhere 
@Injectable({
  providedIn: 'root'  // project 
})
export class UrlService {

  constructor(private _httptoqa: HttpClient) { }


  getCategory() {

    return this._httptoqa.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories")
  }

  postNewUser(data: any): Observable<any> {

    return this._httptoqa.post("https://67cea6ee125cd5af757b6514.mockapi.io/Users", data)
  }




  getAllUsers() {
    return this._httptoqa.get<any>("https://67cea6ee125cd5af757b6514.mockapi.io/Users");
  }


  addCategory(data :any) {
    return this._httptoqa.post("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories", data)
  }
}
