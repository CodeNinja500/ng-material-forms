import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HomePageComponent } from './home-page.component';
import {MatChipsModule} from "@angular/material/chips";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [MatCardModule, MatChipsModule, NgIf, NgForOf, RouterLink],
  declarations: [HomePageComponent],
  providers: [],
  exports: [HomePageComponent]
})
export class HomePageComponentModule {
}
