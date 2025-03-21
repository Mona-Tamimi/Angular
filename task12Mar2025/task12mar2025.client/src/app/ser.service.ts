import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerService {
  private apiUrl = 'https://67cd64b6dd7651e464ee3d63.mockapi.io/categories';
  private apiUrlProduct = 'https://67cd64b6dd7651e464ee3d63.mockapi.io/products';
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getProductsByCategory(categoryId: string) {
    return this.http.get<any[]>(`${this.apiUrlProduct}?categoryId=${categoryId}`);
  }

  getProductById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrlProduct}/${id}`);
  }
}
