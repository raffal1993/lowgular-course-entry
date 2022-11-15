import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {EmployeeService} from "../../services/employee.service";
import {PersonModel} from "../../model/person.model";

@Component({
  selector: 'employees-faces',
  templateUrl: './employees-faces.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./employees-faces.component.css']
})
export class EmployeesFacesComponent {

  constructor( private _employeeService: EmployeeService) {
  }
  data$: Observable<PersonModel[] | null> = this._employeeService.getAll()
}
