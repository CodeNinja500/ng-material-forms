import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductListComponentModule} from './components/product-list/product-list.component-module';
import {ProductServiceModule} from "./services/product.service-module";

@NgModule({
  imports: [RouterModule.forRoot([{path: 'new-product', component: ProductListComponent}]),ProductServiceModule ,ProductListComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
