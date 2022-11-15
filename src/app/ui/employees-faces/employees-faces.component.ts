import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EmployeeModel} from "../../model/employee.model";

@Component({
  selector: 'employees-faces',
  templateUrl: './employees-faces.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./employees-faces.component.css']
})
export class EmployeesFacesComponent {

  constructor(private _httpClient: HttpClient) {
  }
  data$: Observable<EmployeeModel[] | null> = this._httpClient.get<EmployeeModel[]>("assets/employees.json")
}
