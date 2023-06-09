
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from './auth.guard';
import { PrdouctdetailsComponent } from './prdouctdetails/prdouctdetails.component';
//,canActivate:[AuthGuard]
const routes: Routes = [
  {path:'' , redirectTo:'home',pathMatch:'full'},
  {path:'home'  ,component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'categories' , component:CategoriesComponent},
  {path:'products' , component:ProductsComponent},
  {path:'productDetails/:id' , component:PrdouctdetailsComponent},

  {path:'cart' , component:CartComponent},
  {path:'brands' , component:BrandsComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'settings' , loadChildren:() => import('./settings/settings.module').then((m)=>m.SettingsModule)},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },

  {path:'**' , component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
