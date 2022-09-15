import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';
import { ShopdetailComponent } from './shopdetail/shopdetail.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';


const routes: Routes = [
  { path: 'shop', component: ShopComponent },
  { path: '', component: HomeComponent },
  { path: 'shopdetail', component: ShopdetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'shoppingcart', component: ShoppingcartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotfoundComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
