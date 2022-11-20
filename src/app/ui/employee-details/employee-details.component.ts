import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, Observable} from 'rxjs';
import {EmployeeDetailsModel} from "../../model/employee-details.model";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailsComponent {
  readonly params$: Observable<EmployeeDetailsModel> = this._activatedRoute.params.pipe(
    map(param => ({id: param["id"], name: param["name"]}))
  )

  constructor(private _activatedRoute: ActivatedRoute) {
  }

}
