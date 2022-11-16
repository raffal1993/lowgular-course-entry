import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {EmployeesModel} from "../../model/employees.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./new-employee.component.css"]
})
export class NewEmployeeComponent {
  constructor(private _employeeService: EmployeeService) {
  }

  employeeForm: FormGroup = new FormGroup(
    {
      name: new FormControl(
        null, [Validators.required]
      ),
      mail: new FormControl(
        null, [Validators.email, Validators.required]
      ),
      salary: new FormControl(
        null, [Validators.min(0), Validators.required]
      ),

    }
  )

  createEmployee(newEmployee: EmployeesModel) {
    this._employeeService.createNewEmployee(newEmployee).subscribe()
    this.employeeForm.reset()
    alert("New employee created!")
  }
}
