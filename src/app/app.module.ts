import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeesComponentModule} from "./ui/employees/employees.component-module";
import {EmployeeServiceModule} from "./services/employee.service-module";
import {NewEmployeeComponentModule} from "./ui/new-employee/new-employee.component-module";
import {RouterModule} from "@angular/router";
import {NavbarComponentModule} from "./ui/navbar/navbar.component-module";
import {FooterComponentModule} from "./ui/footer/footer.component-module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    EmployeesComponentModule,
    EmployeeServiceModule,
    NewEmployeeComponentModule,
    NavbarComponentModule,
    FooterComponentModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
