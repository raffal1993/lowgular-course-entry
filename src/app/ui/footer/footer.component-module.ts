import {NgModule} from '@angular/core';
import {FooterComponent} from './footer.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [FooterComponent],
  providers: [],
  exports: [FooterComponent]
})
export class FooterComponentModule {
}
