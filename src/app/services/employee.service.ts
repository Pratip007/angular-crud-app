import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    return this._http.post('https://pratip007.github.io/Employee-Json-API/db.json', data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`https://pratip007.github.io/Employee-Json-API/db.json${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get('https://pratip007.github.io/Employee-Json-API/db.json');
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`https://pratip007.github.io/Employee-Json-API/db.json${id}`);
  }
}
