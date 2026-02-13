import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { TopDealProduct } from '../models/product.model';
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
}
