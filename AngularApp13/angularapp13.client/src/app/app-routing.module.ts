import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { DashBoardComponent } from './Admin/dash-board/dash-board.component';
import { GetCategoryComponent } from './Admin/get-category/get-category.component';
import { GetProductComponent } from './Admin/get-product/get-product.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';

const routes: Routes = [

  { path: "loginAli", component: SignInComponent },
  { path: "signup", component: SignUpComponent },
  { path: "home", component: HomeComponent },
  {path  : "category" , component : CategoryComponent},
  { path: "product/:id", component: ProductComponent },
  { path: "signUp", component: RegistrationComponent },
  { path: "signIn", component: LoginComponent },
  { path: "structure", component: StructrualComponent },
  { path: "parent", component: ParentComponent },
  { path: "child", component: ChildComponent },

  {
    path: "dashBoard", component: DashBoardComponent, children: [

      { path: "getCategory", component: GetCategoryComponent },
      { path: "getProduct", component: GetProductComponent },
      { path: "addCategory", component: AddCategoryComponent },
      {path : "addProduct" , component : AddProductComponent}



  ] }



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
