import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {PersonModel} from '../model/person.model';
import {CreateEmployeeModel} from '../model/create-employee.model';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<PersonModel[]> {
    return this._httpClient.get<PersonModel[]>("assets/data/people.json")
  }

  createEmployee(employee: CreateEmployeeModel): Observable<void> {
    return this._httpClient.post<CreateEmployeeModel>(
      "https://dummy.restapiexample.com/api/v1/create", employee)
      .pipe(map(_ => void 0))
  }

  delete(id: string): Observable<void> {
    return this._httpClient.delete
    (`https://dummy.restapiexample.com/api/v1/delete/${id}`).pipe
    (map(_ => void 0))
  }
}
