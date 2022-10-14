import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export default class EmployeeService {
    
    employeeList = [];
    constructor(private _httpClient: HttpClient) { }
    
    getEmployeeDetailsObservable() {
        return this._httpClient.get("http://localhost:3000/employees");
    }
    
    deleteEmployee(employeeId: any) {
        return this._httpClient.delete("http://localhost:3000/employees/" + employeeId)
    }
}