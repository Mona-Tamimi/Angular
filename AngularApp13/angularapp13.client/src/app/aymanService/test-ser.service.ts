import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' //public
})
export class TestSerService {

  constructor(private _url  : HttpClient) { }

  getData() {

    return this._url.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories")
  }


  getProductsByCategoryId() : Observable<any> {
    return this._url.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products");
  }

}
