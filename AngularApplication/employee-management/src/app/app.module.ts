import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import EmployeeListingComponent from "./employee-listing/employee-listing.component";
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LatestTimeComponent } from './latest-time/latest-time.component';
import { FormsModule } from "@angular/forms";
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { HttpClientModule } from "@angular/common/http";
import { EmpCountComponent } from './emp-count/emp-count.component';

@NgModule({
    declarations: [EmployeeListingComponent, EmployeeDetailsComponent, LatestTimeComponent, EmpDetailsComponent, EmpCountComponent],
    imports: [ BrowserModule, FormsModule, HttpClientModule ],
    bootstrap: [EmpDetailsComponent, EmpCountComponent]
})
export default class AppModule { }