import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';
import { DiscountOffers } from 'src/app/Models/discount-offers';
import { ICategory } from 'src/app/Models/icategory';
import { Cart } from 'src/app/Models/cart';
import { ProductsService } from 'src/app/Services/products.service';
import { Router } from '@angular/router';
import { ProductsApiService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges {
  storeClass: Store;
  ClientName: string;
  // ProductList: IProduct[];
  IsPurchased: boolean = true;
  // categories: ICategory[];
  DiscountOffer: DiscountOffers;
  text: string = ""

  carts: Cart[] = []
  cart!: Cart

  iproductlistOfCat: IProduct[] = [];
  prod!: IProduct
  // selecteed: number = 0;

  @Input() recivedcatid: number = 0; // This to take from Parent "Order"

  totalPrice: number = 0;
  TotalPriceOfCart: number = 0;
  // Declare Event
  @Output() ArrayOfCart: EventEmitter<Cart[]>;





  constructor(private prdService: ProductsService, private route: Router, private ProductsApiService: ProductsApiService) {

    this.ArrayOfCart = new EventEmitter();

    // this.categories = [{ id: 1, Name: "Mobile" }, { id: 2, Name: "Laptop" }, { id: 3, Name: "TV" },]
    this.storeClass = new Store(1, "Accessories", ["Branch1", "Branch2", "Branch3"], "../../../assets/download.png");
    this.ClientName = "Mohamed";
    this.DiscountOffer = 0;

  }
  ngOnChanges(): void {
    //Take Products Of Cat ID From Product Services
    // this.iproductlistOfCat = this.prdService.GetAllProductsOfCatID(this.recivedcatid)
    if (this.recivedcatid == 0) {
      this.ProductsApiService.getAllProducts().subscribe(AllProds => (this.iproductlistOfCat = AllProds))
    } else {

      // to Fill this Array with products make Subscribe to iproductlistOfCat
      this.ProductsApiService.getAllProductsByCatID(this.recivedcatid).subscribe(prodList => { this.iproductlistOfCat = prodList })
    }
  }

  OpenProductDetails(prdid: number) {
    // Solution 1
    // this.route.navigate(['Path Route'],parmeter)
    // this.route.navigate(['Products',prdid])
  }




  UpdateProduct(prdid: number, productPrice: number, itemsCount: any) {
    //Get Product With Product ID
    this.prod = this.iproductlistOfCat.filter(p => p.id == prdid)[0]

    //Check If The Count < Quantity
    if (itemsCount > this.prod.quantity) {
      alert(`You Can't Take More Than ${this.prod.quantity}`)
      throw this.text = ` You Can't Take More Than ${this.prod.quantity}`
    }

    //Check If The User Pressed Before he Insert Count
    else if (itemsCount === "") { //How to make Number => int Or Make items Count => Number
      alert("Count Can't Be Empty")
      throw "You Can't Insert Null Product"
    }
    //minus itemsCount from quantity
    else {
      this.prod.quantity -= parseInt(itemsCount)
    }
    this.totalPrice += (productPrice * parseInt(itemsCount))
    // this.TotalPriceOfCart +=(productPrice * parseInt(itemsCount))


    this.cart = {
      product: this.prod,
      count: itemsCount,
      totalPrice: this.totalPrice
    }


    if (this.carts.find((c => c.product.id == this.cart.product.id))) {
      this.carts.forEach(cart => {
        if (cart.product.id == this.prod.id) {
          let x = Number(cart.count)
          let y = Number(itemsCount)
          let z = x + y
          cart.count = z
          this.TotalPriceOfCart -= cart.totalPrice

          cart.totalPrice = cart.product.price * z

          this.TotalPriceOfCart += cart.totalPrice

          this.ArrayOfCart.emit(this.carts)
          return
        }
      });


    } else {

      if (this.cart != undefined)
        this.carts.push(this.cart)
      this.TotalPriceOfCart += (productPrice * parseInt(itemsCount))

      this.ArrayOfCart.emit(this.carts)

    }





  }


  ngOnInit(): void {
    // this.FilterProducts(); // sh8ala
  }
}
