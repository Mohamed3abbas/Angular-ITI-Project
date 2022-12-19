import { IProduct } from "./iproduct";

export interface Cart {
  product:IProduct
  count:number
  totalPrice:number
}
