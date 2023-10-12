import { AllProductsComponent } from './products/components/all-products/all-products.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { AuthClassGuard } from './auth/auth-class.guard';

const routes: Routes = [
  {path: 'products',canActivate: [AuthClassGuard] , component: AllProductsComponent},
  {path: 'details/:id',canActivate: [AuthClassGuard] , component: ProductDetailsComponent},
  {path: 'cart',canActivate: [AuthClassGuard] , component: CartComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path: '**' , redirectTo: 'products' , pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
