import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import EmployeeService from '../services/employee.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent {
  
  constructor(private _empService: EmployeeService) {
    this._empService.getEmployeeDetailsObservable().subscribe((response: any) => {
      this.masterEmployeeDetails = response;
      this.filterEmployeeDetails = this.masterEmployeeDetails;
      this._empService.employeeList = response;
    }, (error: Error) => {
      alert("API Failued because: " + error.message);
    })
    
    this._empService.employeeListUpdateEvent.subscribe(() => {
      debugger;
      this.masterEmployeeDetails = this._empService.employeeList;
      this.filterEmployeeDetails = this.masterEmployeeDetails;
    })
  }
  
  filterText: string = "";
  
  newEmployee = {
    name: "",
    id: 0,
    createdAt: "Today",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiAMlt7-spkqZodbYo8B9-PGy7b1EcsHQCw&usqp=CAU"
  }
  
  masterEmployeeDetails: any = [];
  filterEmployeeDetails: any = []; 
  
  filterEmployeeList() {
    if (this.filterText != "") {
      
      this.filterEmployeeDetails = this.masterEmployeeDetails.filter((employee: any) => {
        return employee.name.indexOf(this.filterText) > -1;
      })
    }
    
    if (this.filterText == "") {
      this.filterEmployeeDetails = this.masterEmployeeDetails;
    }
  }
  
  deleteEmployee(employeeId: number) {
    this._empService.deleteEmployee(employeeId).subscribe(() => {
      this.masterEmployeeDetails = this.masterEmployeeDetails.filter((employee: any) => {
        return +employee.id != +employeeId;
      });
      
      this.filterEmployeeDetails = this.masterEmployeeDetails;
      this.filterText = "";
      debugger;
      this._empService.getEmployeeDetailsAndNotify();
    }, () => {
      alert("Failed to Delete Employee with id: " + employeeId)
    });
  }
  
  addEmployee() {
    debugger;
    this._empService.addEmployee(this.newEmployee.name, this.newEmployee.id).subscribe(() => {
      debugger;
      this.masterEmployeeDetails.push(this.newEmployee);
      this.filterEmployeeDetails = this.masterEmployeeDetails;
      this.filterText = "";
      this.clearValue();
      this._empService.getEmployeeDetailsAndNotify();
    });
  }
  
  clearValue() {
    this.newEmployee = {
      name: "",
      id: 0,
      createdAt: "Today",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiAMlt7-spkqZodbYo8B9-PGy7b1EcsHQCw&usqp=CAU"
    }
  }
}
