import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { AccountCreationComponent } from './account-creation/account-creation.component';
import { AboutComponent } from './about/about.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
const routes: Routes = [
 { path: 'home', component: HomeComponent }, // Add the route to the home page
 { path: 'login', component: LoginComponent }, // Add the route to the login page
 { path: 'products', component: ProductsComponent }, // Add the route to the products page
 { path: 'register', component: AccountCreationComponent }, // Add the route to the account-creation page
 { path: 'cart', component: ShoppingCartComponent }, // Add the route to the shopping-cart page
 { path: 'about', component: AboutComponent }, // Add the route to the about page
 { path: 'app-root', component: AppComponent }, // Add the route to the main page
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }