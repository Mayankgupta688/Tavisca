import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent {
  
  constructor(private _httpClient: HttpClient) {
    this._httpClient.get("https://5a530e1477e1d20012fa066a.mockapi.io/login").subscribe((response) => {
      this.masterEmployeeDetails = response;
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
    this.masterEmployeeDetails = this.masterEmployeeDetails.filter((employee: any) => {
      return +employee.id != +employeeId;
    });
    
    this.filterEmployeeDetails = this.masterEmployeeDetails;
    this.filterText = "";
  }
  
  addEmployee() {
    if (this.newEmployee.name && this.newEmployee.id && this.newEmployee.avatar && this.newEmployee.createdAt) {
      this.masterEmployeeDetails.push(this.newEmployee);
      this.filterEmployeeDetails = this.masterEmployeeDetails;
      this.filterText = "";
      this.clearValue();
    }
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
