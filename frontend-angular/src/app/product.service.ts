import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, Order, OrderRequest } from './models';

@Injectable({ providedIn: 'root' })
export class ProductService {
  // Empty base -> relative /api, handled by dev proxy or nginx in prod.
  private readonly base = '';

  constructor(private http: HttpClient) {}

  getProducts(search = ''): Observable<Product[]> {
    const q = search ? `?search=${encodeURIComponent(search)}` : '';
    return this.http.get<Product[]>(`${this.base}/api/products${q}`);
  }

  placeOrder(order: OrderRequest): Observable<Order> {
    return this.http.post<Order>(`${this.base}/api/orders`, order);
  }
}
