import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProductsFromServerService {
  http = {};

  constructor(private httpClient: HttpClient , private router:Router) {
    this.http = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    }
  }


  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.BaseApiURL}/product`);
  }
  getProductByID(pID: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${environment.BaseApiURL}/product/${pID}`);
  }
  addNewProduct(newProduct: IProduct): Observable<IProduct> {
    return this.httpClient.post<IProduct>(`${environment.BaseApiURL}/product/`, JSON.stringify(newProduct),this.http);
  }
  deleteProduct(productId: number): Observable<void> {
    const url = `${environment.BaseApiURL}/product/${productId}`;
    return this.httpClient.delete<void>(url);
  }
  updateProduct(updatedProduct: IProduct): Observable<IProduct> {
    const url = `${environment.BaseApiURL}/product/${updatedProduct.id}`;
    return this.httpClient.put<IProduct>(url, JSON.stringify(updatedProduct), this.http);
  }
  getAllProductIds(): Observable<number[]> {
    return this.httpClient.get<IProduct[]>(`${environment.BaseApiURL}/product`).pipe
    ( map(products => products.map(product => product.id)));
  }
  editProduct(productId: number) {
    // Navigate to the AdminComponent with the product ID as a query parameter
    this.router.navigate(['/admin'], { queryParams: { productId } });
  }
}
