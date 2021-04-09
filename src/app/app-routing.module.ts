import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PorductAddComponent } from './components/porduct-add/porduct-add.component';
import { ProductComponent } from './components/product/product.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [{path:"",pathMatch:"full",component:ProductComponent},
{path:"products",component:ProductComponent},
{path:"products/category/:categoryId",component:ProductComponent},
{path:"products/add",component:PorductAddComponent,canActivate:[LoginGuard]},
{path:"login",component:LoginComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
