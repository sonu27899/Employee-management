import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor(private _http: HttpClient) { }
  private get_all_emp_url = environment.url +  'getAllEmployee/';
  private create_emp_url = environment.url + 'AddEmployee/';
  private update_emp_url = environment.url + 'updateEmployee/';
  private get_all_department_url= environment.url + 'getAllDepartment/';
  private delete_emp_url= environment.url + 'deleteEmployee/';

  getAllEmp()
  {
    return this._http.get(this.get_all_emp_url);
  }
  createEmp(item)
  {
    let head1 = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(item);

    return this._http.post(this.create_emp_url, body, { headers: head1 });
  }
  updateEmp(item)
  {
    let head1 = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(item);

    return this._http.put(this.update_emp_url, body, { headers: head1 });
  }
  getAllDepartment()
  {
    return this._http.get(this.get_all_department_url);
  }
  delete_employee(Id:number)
  {
    let head1 = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify({Id});

    return this._http.put(this.delete_emp_url, body, { headers: head1 });
  }
}
