import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { ProductsApiService } from 'src/app/Services/products-api.service';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  ProductList: IProduct[];

  constructor(private ProductsApiService : ProductsApiService) {
    this.ProductList = [
      // { id: 1, name: 'Samsung', price: 12500, quantity: 4, imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIVWt1Az3vOiVG_S5J23oz8WZn-w-0kXhqw8nVdoSZ9Mc_Z7gPw39kvhHZ4yOCPgssHoI&usqp=CAU', categoryID: 1 },
      // { id: 2, name: 'Lenovo', price: 25000, quantity: 7, imgURL: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', categoryID: 2 },
      // { id: 3, name: 'Redmi', price: 8000, quantity: 1, imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIVWt1Az3vOiVG_S5J23oz8WZn-w-0kXhqw8nVdoSZ9Mc_Z7gPw39kvhHZ4yOCPgssHoI&usqp=CAU', categoryID: 1 },
      // { id: 4, name: 'LG', price: 40000, quantity: 1, imgURL: 'https://static.vecteezy.com/system/resources/thumbnails/004/778/490/small/tv-modern-flat-screen-lcd-free-vector.jpg', categoryID: 3 },
      // { id: 5, name: 'Redmi', price: 8000, quantity: 4, imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIVWt1Az3vOiVG_S5J23oz8WZn-w-0kXhqw8nVdoSZ9Mc_Z7gPw39kvhHZ4yOCPgssHoI&usqp=CAU', categoryID: 1 },
      // { id: 6, name: 'Tornado', price: 45000, quantity: 2, imgURL: 'https://static.vecteezy.com/system/resources/thumbnails/004/778/490/small/tv-modern-flat-screen-lcd-free-vector.jpg', categoryID: 3 },
      // { id: 7, name: 'HP', price: 30000, quantity: 5, imgURL: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', categoryID: 2 },
      // { id: 8, name: 'Hisense', price: 40000, quantity: 6, imgURL: 'https://static.vecteezy.com/system/resources/thumbnails/004/778/490/small/tv-modern-flat-screen-lcd-free-vector.jpg', categoryID: 3 },
      // { id: 9, name: 'Lenovo', price: 25000, quantity: 6, imgURL: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', categoryID: 2 },
      // { id: 10, name: 'Colorado', price: 45000, quantity: 11, imgURL: 'https://static.vecteezy.com/system/resources/thumbnails/004/778/490/small/tv-modern-flat-screen-lcd-free-vector.jpg', categoryID: 3 },
    ];
  }

  //Function To Return All Product
  GetAllProducts(): IProduct[] {
    return this.ProductList;
  }

  //Function To Returen All Product Depend On Category id
  GetAllProductsOfCatID(catID: number): IProduct[] {

    if (catID == 0) {
      return this.GetAllProducts()
    } else {
      return this.ProductList.filter(prd => prd.categoryID == catID)
    }

  }

  GetProductByID(pid: number): IProduct | undefined {
    return this.ProductList.find(prd => prd.id == pid)
  }

  GetAllProductsID(){
    return this.ProductList.map(prd=>prd.id);
  }
}
