import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { CategoryProduct, TopDealProduct } from '../models/product.model';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTopDeals(): Observable<TopDealProduct[]> {
    return this.http.get<TopDealProduct[]>(
      `${this.baseUrl}/home/top-deals`).pipe(delay(2000));
  }

  getCategoryProducts(category: string): Observable<CategoryProduct[]> {
    return this.http.get<CategoryProduct[]>(
      `${this.baseUrl}/home/category/${category}`).pipe(delay(2000));
  }
}
