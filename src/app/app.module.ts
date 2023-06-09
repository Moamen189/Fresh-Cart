
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PrdouctdetailsComponent } from './prdouctdetails/prdouctdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainsliderComponent } from './mainslider/mainslider.component';
import { BuyPipe } from './buy.pipe';
import { SearchPipe } from './search.pipe';
import { HeaderInterceptor } from './header.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BrandsComponent,
    CartComponent,
    CategoriesComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    NotFoundComponent,
    RegisterComponent,
    ProductsComponent,
    PrdouctdetailsComponent,
    MainsliderComponent,
    BuyPipe,
    SearchPipe
  ],
  imports: [
   BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule



  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS ,
      useClass:HeaderInterceptor,
      multi:true
    }





  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
