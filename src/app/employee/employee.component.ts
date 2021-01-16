import { Component, Input, OnInit } from '@angular/core';
import { InitialNavigation } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  @Input() name: string;
  @Input() phone: number;
  @Input() email: string;

  constructor() { }

  ngOnInit(): void {
  }

}
