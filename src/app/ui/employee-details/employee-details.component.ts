import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {EmployeeDetailsModel} from '../../model/employee-details.model';
import {EmployeeService} from '../../services/employee.service';
import {EmployeesModel} from "../../model/employees.model";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailsComponent {
  readonly details$: Observable<EmployeesModel> = this._activatedRoute.params
    .pipe(switchMap(data => this._employeeService.getOne(data["id"])))

  constructor(private _activatedRoute: ActivatedRoute, private _employeeService: EmployeeService) {
  }

  readonly params$: Observable<EmployeeDetailsModel> = this._activatedRoute.params.pipe(
    map(param => ({id: param["id"], name: param["name"]}))
  )


}
