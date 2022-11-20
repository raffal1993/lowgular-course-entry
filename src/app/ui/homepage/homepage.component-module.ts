import {NgModule} from '@angular/core';
import {HomepageComponent} from './homepage.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [HomepageComponent],
  providers: [],
  exports: [HomepageComponent]
})
export class HomepageComponentModule {
}
