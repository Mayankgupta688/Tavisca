import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import EmployeeListingComponent from "./employee-listing/employee-listing.component";
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LatestTimeComponent } from './latest-time/latest-time.component';
import { FormsModule } from "@angular/forms";
import { EmpDetailsComponent } from './emp-details/emp-details.component';

@NgModule({
    declarations: [EmployeeListingComponent, EmployeeDetailsComponent, LatestTimeComponent, EmpDetailsComponent],
    imports: [ BrowserModule, FormsModule ],
    bootstrap: [EmpDetailsComponent]
})
export default class AppModule { }