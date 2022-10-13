import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent {
  employeeDetails = [{
    name: "Mayank Gupta",
    id: 1,
    createdAt: "Today",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiAMlt7-spkqZodbYo8B9-PGy7b1EcsHQCw&usqp=CAU"
  }, {
    name: "Anshul Gupta",
    id: 2,
    createdAt: "Today",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiAMlt7-spkqZodbYo8B9-PGy7b1EcsHQCw&usqp=CAU"
  }, {
    name: "Meha Gupta",
    id: 3,
    createdAt: "Today",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiAMlt7-spkqZodbYo8B9-PGy7b1EcsHQCw&usqp=CAU"
  }, {
    name: "TechnoFunnel",
    id: 4,
    createdAt: "Today",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiAMlt7-spkqZodbYo8B9-PGy7b1EcsHQCw&usqp=CAU"
  }, {
    name: "Aniket Gupta",
    id: 5,
    createdAt: "Today",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiAMlt7-spkqZodbYo8B9-PGy7b1EcsHQCw&usqp=CAU"
  }, {
    name: "Manish Gupta",
    id: 6,
    createdAt: "Today",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiAMlt7-spkqZodbYo8B9-PGy7b1EcsHQCw&usqp=CAU"
  }, {
    name: "Ankit Gupta",
    id: 7,
    createdAt: "Today",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiAMlt7-spkqZodbYo8B9-PGy7b1EcsHQCw&usqp=CAU"
  }, {
    name: "Rahul",
    id: 8,
    createdAt: "Today",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiAMlt7-spkqZodbYo8B9-PGy7b1EcsHQCw&usqp=CAU"
  }]
}
