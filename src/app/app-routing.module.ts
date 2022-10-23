import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductServiceModule } from './services/product.service-module';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { LoginComponentModule } from './components/login/login.component-module';
import { LoginServiceModule } from './services/login.service-module';
import { UserComponentModule } from './components/user/user.component-module';
import { UserServiceModule } from './services/user.service-module';
import { HomePageComponentModule } from './components/home-page/home-page.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'new-product', component: ProductListComponent },
    { path: 'create-employee', component: EmployeeFormComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: UserComponent },
    { path: '', component: HomePageComponent }
  ]), ProductServiceModule, ProductListComponentModule, EmployeeFormComponentModule, EmployeeServiceModule, LoginComponentModule, LoginServiceModule, UserComponentModule, UserServiceModule, HomePageComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
