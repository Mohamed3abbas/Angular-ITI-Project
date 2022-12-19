import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { CatagoriesApiServiceService } from 'src/app/Services/catagories-api-service.service';
import { ProductsApiService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  categoryList:ICategory[] = []
  NewProd: IProduct = {} as IProduct;
  constructor(private productApiService: ProductsApiService, private router: Router, private CatagoriesApiService: CatagoriesApiServiceService) {
    this.CatagoriesApiService.getAllCatagories().subscribe(catagories => {this.categoryList = catagories;})
    // this.catagoryApiService.getAllCatagories().subscribe(catagories => this.categoryList = catagories)


  }

  ngOnInit(): void {
  }

  InsertNewProduct() {

    this.productApiService.AddNewProduct(this.NewProd).subscribe(prd => {
      this.router.navigate(['/Order'])
    })
  }
}
