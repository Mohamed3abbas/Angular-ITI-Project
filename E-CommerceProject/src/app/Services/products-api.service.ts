import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../Models/icategory';
import { IProduct } from '../Models/iproduct';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  private  HttpOptions ={};
  constructor(private httpClient: HttpClient) {
    //return Observable

    //Content Type For Post
    this.HttpOptions = {
      headers : new HttpHeaders({'Content-Type' :'application/json'})
    }
  }




  getAllProducts(): Observable<IProduct[]> {
    {
      return this.httpClient.get<IProduct[]>(`${environment.ApiBaseURL}/Products`)
    }
  }

  getAllProductsByCatID(catID: number): Observable<IProduct[]> {
    //Query String
    return this.httpClient.get<IProduct[]>(`${environment.ApiBaseURL}/Products?categoryID=${catID}`);
  }


  getProductByID(prdID: number): Observable<IProduct> {
    //url Param
    return this.httpClient.get<IProduct>(`${environment.ApiBaseURL}/Products/${prdID}`)
  }


  getAllProductsID(): Observable < number[] > {
    //url Param
    let Products =  this.httpClient.get<IProduct[]>(`${environment.ApiBaseURL}/Products`)

    return Products.pipe(map(prd=>prd.map(prd=>prd.id)))
  }

  AddNewProduct(newProd:IProduct):Observable<IProduct>{
    //Add Product in Products , Change data from type Script to JSON , And Content Type =HttpOptions
    return this.httpClient.post<IProduct>(`${environment.ApiBaseURL}/Products`,JSON.stringify(newProd),this.HttpOptions)

  }


}

