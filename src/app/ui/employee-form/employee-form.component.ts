import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../../services/employee.service';
import {ProjectsService} from '../../services/projects.service';
import {CreateEmployeeModel} from '../../model/create-employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {

  constructor(private _employeeService: EmployeeService, private _projectsService: ProjectsService) {
  }

  readonly employeeForm: FormGroup = new FormGroup(
    {
      name: new FormControl(null,
        [Validators.required]),
      age: new FormControl(null,
        [Validators.min(0)]),
      salary: new FormControl(null,
        [Validators.required, Validators.min(0)])
    });


  onButtonClick(formValues: { name: string, age: number, salary: number }) {
    alert("User was successfully added to the database. " +
      "Email: " + formValues.name +
      ", Age: " + formValues.age +
      ", Salary: " + formValues.salary)
  }

  onFormSubmit(form: CreateEmployeeModel) {
    this._employeeService.createEmployee(form).subscribe()
  }
}
