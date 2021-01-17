import { Component, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { AddEmployeeFormComponent } from '../add-employee-form/add-employee-form.component';

@Component({
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.scss']
})
export class EmployeePageComponent implements OnInit {


  employeeList: { name: string, title: string }[] = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  ];
  
  constructor(private windowService: NbWindowService) { }

  openWindow() {
    this.windowService.open(AddEmployeeFormComponent, { title: 'Add Employee' });

  }


  ngOnInit(): void {
  }

}
