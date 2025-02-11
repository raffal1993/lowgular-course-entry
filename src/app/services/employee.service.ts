import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiResponse} from "./api.response";
import {EmployeesAPIModel} from "../model/employeesAPI.model";
import {map, Observable} from "rxjs";
import {EmployeesModel} from "../model/employees.model";

const URL_ALL_EMPLOYEES = "https://dummy.restapiexample.com/api/v1/employees"
const URL_DELETE_EMPLOYEE = "https://dummy.restapiexample.com/api/v1/delete/"
const URL_CREATE_EMPLOYEE = "https://dummy.restapiexample.com/api/v1/create"

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllEmployees(): Observable<EmployeesModel[]> {
    return this._httpClient.get<ApiResponse<EmployeesAPIModel[]>>(URL_ALL_EMPLOYEES).pipe(
      map((res: ApiResponse<EmployeesAPIModel[]>): EmployeesModel[] =>
        res.data.map((employeeAPI: EmployeesAPIModel) => {
          const {employee_name, id, profile_image} = employeeAPI;
          return {
            personalNumber: id,
            name: employee_name,
            mail: `${employee_name}@gmail.com`,
            img: profile_image,
          }
        })
      )
    )
  }

  deleteEmployee(id: string): Observable<void> {
    return this._httpClient.delete(`${URL_DELETE_EMPLOYEE}${id}`).pipe(map(_ => void 0))
  }

  createNewEmployee(employee: EmployeesModel): Observable<void> {
    return this._httpClient.post(URL_CREATE_EMPLOYEE, employee).pipe(map(_ => void 0))
  }


}
