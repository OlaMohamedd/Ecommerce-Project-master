import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MainSecComponent } from './Components/main-sec/main-sec.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { ProductComponent } from './Components/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCardDirective } from './Directives/product-card.directive';
import { CreditCardFormatPipe } from './Pipes/credit-card-format.pipe';
import { CategoryFilterComponentComponent } from './Components/category-filter-component/category-filter-component.component';
import { PriceFilterComponentComponent } from './Components/price-filter-component/price-filter-component.component';
import { NotFoundComponentComponent } from './Components/not-found-component/not-found-component.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './Components/admin/admin.component';
import { UserRegistrationComponent } from './Components/user-registration/user-registration.component';
import { LoginComponent } from './Components/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainSecComponent,
    NavBarComponent,
    SideBarComponent,
    ProductComponent,
    ProductCardDirective,
    CreditCardFormatPipe,
    CategoryFilterComponentComponent,
    PriceFilterComponentComponent,
    NotFoundComponentComponent,
    ProductDetailsComponent,
    AdminComponent,
    UserRegistrationComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
