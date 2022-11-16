import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./employees.component.css"]
})
export class EmployeesComponent {
  constructor(private _employeeService: EmployeeService) {
  }

  data$: Observable<any> = this._employeeService.getAllEmployees()

  delete(id: string) {
    this._employeeService.deleteEmployee(id).subscribe()
    alert("User deleted!")
  }

}

