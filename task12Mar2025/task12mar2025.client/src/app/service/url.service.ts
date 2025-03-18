import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface productData {
  name: string;
  avatar: string;
  categoryId: string;
}

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private _http: HttpClient) { }


  getCategory() {

    return this._http.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories")
  }

  postNewUser(data: any): Observable<any> {

    return this._http.post("https://67cea6ee125cd5af757b6514.mockapi.io/Users", data)
  }




  getAllUsers() {
    return this._http.get<any>("https://67cea6ee125cd5af757b6514.mockapi.io/Users");
  }


  addCategory(data: any) {
    return this._http.post("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories", data)
  }

  setProduct(product: productData): Observable<any> {
    return this._http.post("https://67cd64b6dd7651e464ee3d63.mockapi.io/products", product);
  }

  getProducts(): Observable<any> {
    return this._http.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products");
  }
}
