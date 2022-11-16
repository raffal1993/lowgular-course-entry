import {NgModule} from '@angular/core';
import {NewEmployeeComponent} from './new-employee.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    ReactiveFormsModule
  ],
  declarations: [NewEmployeeComponent],
  providers: [],
  exports: [NewEmployeeComponent]
})
export class NewEmployeeComponentModule {
}
