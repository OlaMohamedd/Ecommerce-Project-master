import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceFilterComponentComponent } from './Components/price-filter-component/price-filter-component.component';
import { ProductComponent } from './Components/product/product.component';
import { MainSecComponent } from './Components/main-sec/main-sec.component';
import { CategoryFilterComponentComponent } from './Components/category-filter-component/category-filter-component.component';
import { NotFoundComponentComponent } from './Components/not-found-component/not-found-component.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AdminComponent } from './Components/admin/admin.component';
import { UserRegistrationComponent } from './Components/user-registration/user-registration.component';
import { LoginComponent } from './Components/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { authGuard } from './Guards/auth.guard';

const routes: Routes = [
  {path : '', redirectTo:'home',pathMatch: 'full'}, //default path

  {path : 'home', component:PriceFilterComponentComponent,title:'Home Page'},
  {path : 'product', component:ProductComponent,title:'Products Page'},
  {path : 'aboutus', component:MainSecComponent,title:'AboutUs Page'},
  {path : 'categories', component:CategoryFilterComponentComponent,title:'categories'},
  {path : 'productDetails/:pID', component:ProductDetailsComponent,title:'productDetails'},
  {path : 'admin', component:AdminComponent,title:'admin',canActivate: [authGuard]},
  {path : 'register', component:UserRegistrationComponent,title:'register'},
  {path : 'login', component:LoginComponent,title:'login'},
  {path : 'logout', component:LogoutComponent,title:'logout'},
  {
    path: 'user', 
    loadChildren: () => import('src/app/Components/user/user.module').then(m => m.UserModule)
  },
  {path : '**',component:NotFoundComponentComponent}, //Error path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
