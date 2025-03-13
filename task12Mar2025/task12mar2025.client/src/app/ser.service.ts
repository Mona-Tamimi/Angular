import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerService {

  private categoriesUrl = "https://67cd64b6dd7651e464ee3d63.mockapi.io/categories";
  private productsUrl = "https://67cd64b6dd7651e464ee3d63.mockapi.io/products";

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.categoriesUrl);
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productsUrl);
  }

  getProductsById(id: number): Observable<any> {
    return this.http.get<any>(`${this.productsUrl}/${id}`);
  }
}
