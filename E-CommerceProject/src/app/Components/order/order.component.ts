import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Cart } from 'src/app/Models/cart';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { CatagoriesApiServiceService } from 'src/app/Services/catagories-api-service.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, AfterViewInit, OnChanges {
  categoryList!: ICategory[]
  selectedCatID: number = 0
  // index: number = 0
  // countchanged: number = 0
  // TotalPriceOfQt: number = 0
  // TotalPriceOrder: number = 0
  // recivedTP: number = 0
  // cart!:Cart
  carts!: Cart[]
  ////////////////////////
  // receivedproduct!: IProduct
  // RecievedProducts!: IProduct[]
  TotalPriceCarts: number = 0
  @ViewChild(ProductComponent) productRef!: ProductComponent

  constructor(private catagoryApiService: CatagoriesApiServiceService) {
    // this.categoryList = [{ id: 1, Name: "Mobile" }, { id: 2, Name: "Laptop" }, { id: 3, Name: "TV" },]
    this.catagoryApiService.getAllCatagories().subscribe(catagories => this.categoryList = catagories)

  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {

  }


  ngAfterViewInit(): void {

    // console.log(this.productRef.cart.count);
    this.TotalPriceCarts += this.productRef.TotalPriceOfCart
    // this.change()
  }
  CalcCheck() {
    this.TotalPriceCarts = this.productRef.TotalPriceOfCart
  }

  addtocart(carts: Cart[]) {

    this.carts = carts
  }

}
