import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "./authentication.service";

@Component({
  templateUrl: './employee.component.html',
  styleUrls: ['./app.component.css']
})
export class EmployeeComponent implements OnInit {
  salSlip: string;
  constructor(private authService: AuthenticationService){
    this.authService.authenticate();
  }

  ngOnInit() {}

  getSalarySlip() {
    if (this.authService.checkAuthentication()) {
      this.salSlip = 'Salary Slip';
    } else {
      this.salSlip = 'Not Authenticated';
    }
  }
}
