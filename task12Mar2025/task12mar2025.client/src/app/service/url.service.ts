import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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




  //getAllUsers() {
  //  return this._http.get<any>("https://67cea6ee125cd5af757b6514.mockapi.io/Users");
  //}


  addCategory(data: any) {
    return this._http.post("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories", data)
  }

  setProduct(product: productData): Observable<any> {
    return this._http.post("https://67cd64b6dd7651e464ee3d63.mockapi.io/products", product);
  }

  getProducts(): Observable<any> {
    return this._http.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products");
  }

  updateCategory(id: any, data: any) {
    return this._http.put(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`, data)
  }


  getCategoryByCategoryId(id: any) {
    return this._http.get(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`)
  }

  updateProduct(id: any, data: any) {
    return this._http.put(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${id}`, data)
  }


  getProductById(id: any) {
    return this._http.get(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${id}`)
  }
  addNewUser(newUser: any): Observable<any> {
    return this._http.post<any>("https://67cea6ee125cd5af757b6514.mockapi.io/Users", newUser);
  }

  getAllUsers(): Observable<any[]> {
    return this._http.get<any[]>("https://67cea6ee125cd5af757b6514.mockapi.io/Users");
  }

  checkUserExists(email: string, password: string): Observable<any> {
    return this._http.get<any>(`https://67cea6ee125cd5af757b6514.mockapi.io/Users?Email=${email}&password=${password}`);
  }


  private isLoggedInSubject = new BehaviorSubject<boolean>(!!localStorage.getItem('User'));
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  login(user: any) {
    localStorage.setItem('User', JSON.stringify(user));
    this.isLoggedInSubject.next(true);
  }

  updateUserProfile(any: any): Observable<any> {
    return this._http.put<any>(`https://67cea6ee125cd5af757b6514.mockapi.io/Users/${any.id}`, any);
  }


  logout() {
    localStorage.removeItem('User');
    this.isLoggedInSubject.next(false);
  }


}
