import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { ProductServiceModule } from './services/product.service-module';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'new-product', component: ProductListComponent }, { path: 'create-employee', component: EmployeeFormComponent }]), ProductServiceModule, ProductListComponentModule, EmployeeFormComponentModule, EmployeeServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
