
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { ShopdetailComponent } from './shopdetail/shopdetail.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { ProductsComponent } from './products/products.component';
import { JustarrivedComponent } from './justarrived/justarrived.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { ShopProductsComponent } from './shop-products/shop-products.component';
import { SearchinshopComponent } from './searchinshop/searchinshop.component';
import { FilterinshopComponent } from './filterinshop/filterinshop.component';
import { SearchforcategoriesComponent } from './searchforcategories/searchforcategories.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
 


@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ShopdetailComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    CheckoutComponent,
    ShoppingcartComponent,
    ProductsComponent,
    JustarrivedComponent,
    SearchComponent,
    ShopProductsComponent,
    SearchinshopComponent,
    FilterinshopComponent,
    SearchforcategoriesComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
