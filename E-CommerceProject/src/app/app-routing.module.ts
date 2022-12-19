import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { AddProductComponent } from './Components/Admin/add-product/add-product.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrderComponent } from './Components/order/order.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductComponent } from './Components/product/product.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';

const routes: Routes = [
  //First Match Wins
  // {path:'',component:MainLayOutComponent}
  {path: '', redirectTo: 'Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'AboutUs',component:AboutUsComponent},
  {path:'ContactUs',component:ContactUsComponent},
  {path:'Products',component:ProductComponent},
  {path:'Products/:pid',component:ProductDetailsComponent},
  {path:'Order',component:OrderComponent},
  {path:'AddProduct',component:AddProductComponent},
  {path:'UserRegisteration',component:UserRegisterComponent},
  {path:'**',component:NotFoundComponent} // Wild Card For Not Found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
