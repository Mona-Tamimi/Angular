import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { StructrualComponent } from './structrual/structrual.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GetCategoryComponent } from './Admin/get-category/get-category.component';
import { GetProductComponent } from './Admin/get-product/get-product.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { DashBoardComponent } from './Admin/dash-board/dash-board.component';

@NgModule({ //  Manager
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    CategoryComponent,
    ProductComponent,
    RegistrationComponent,
    LoginComponent,
    StructrualComponent,
    ParentComponent,
    ChildComponent,
    GetCategoryComponent,
    GetProductComponent,
    AddCategoryComponent,
    AddProductComponent,
    DashBoardComponent // coach batool
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
