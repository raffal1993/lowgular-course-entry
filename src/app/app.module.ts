import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeesComponentModule} from "./ui/employees/employees.component-module";
import {EmployeeServiceModule} from "./services/employee.service-module";
import {NewEmployeeComponentModule} from "./ui/new-employee/new-employee.component-module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeesComponentModule,
    EmployeeServiceModule,
    NewEmployeeComponentModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
