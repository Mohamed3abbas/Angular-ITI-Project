import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';
import { Location } from '@angular/common';
import { ProductsApiService } from 'src/app/Services/products-api.service';
import { ICategory } from 'src/app/Models/icategory';
import { CatagoriesApiServiceService } from 'src/app/Services/catagories-api-service.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  prd: IProduct | undefined = undefined;
  ProdIDList: number[] = []
  currentProductId: number = 0
  currentindex: number = 0
  categories: ICategory[] = []
  ProductsList :IProduct[] = []
  constructor(private productService: ProductsService, private activatedRoute: ActivatedRoute, private location: Location, private route: Router, private ProductsApiService: ProductsApiService ,private CatagoriesApiServiceService :CatagoriesApiServiceService) {



  }

  ngOnInit(): void {
    // firsCase to get id from URL pid ==  from Routing Module
    // let sendProductID = this.activatedRoute.snapshot.paramMap.get('pid')
    // console.log(sendProductID);
    //Second Case
    this.currentProductId = (this.activatedRoute.snapshot.paramMap.get('pid')) ?
      Number(this.activatedRoute.snapshot.paramMap.get('pid')) : 0


    //Observable
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.currentProductId = (paramMap.get('pid')) ? Number(paramMap.get('pid')) : 0
      // console.log(this.currentProductId );

      // let foundprd = this.productService.GetProductByID(this.currentProductId)
      // console.log(foundprd);


      let foundprd1 = this.ProductsApiService.getProductByID(this.currentProductId).subscribe(prod => this.prd = prod)
      // console.log(foundprd1);

      if (!foundprd1) {
        // this.prd = foundprd1
        // console.log(this.prd.id);
        alert("notFound")
        this.location.back();
      }

    })


    this.ProductsApiService.getAllProductsID().subscribe(prod=>this.ProdIDList =prod)

  }



  goback() {
    this.location.back()
  }

  prevFunc() {
    this.currentindex = this.ProdIDList.findIndex(i => i == this.currentProductId)

    // this.currentindex = this.ProductsApiService.

    this.route.navigate(['/Products', this.ProdIDList[--this.currentindex]])
    // this.currentindex=--this.currentindex

  }
  nextFunc() {
    this.currentindex = this.ProdIDList.findIndex(i => i == this.currentProductId)
    this.route.navigate(['/Products', this.ProdIDList[++this.currentindex]])
    // this.currentindex=++this.currentindex

  }

}
