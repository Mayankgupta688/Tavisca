import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import EmployeeListingComponent from "./employee-listing/employee-listing.component";
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LatestTimeComponent } from './latest-time/latest-time.component';
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [EmployeeListingComponent, EmployeeDetailsComponent, LatestTimeComponent],
    imports: [ BrowserModule, FormsModule ],
    bootstrap: [LatestTimeComponent]
})
export default class AppModule { }