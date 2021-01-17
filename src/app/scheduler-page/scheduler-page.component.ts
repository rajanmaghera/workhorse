import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduler-page',
  templateUrl: './scheduler-page.component.html',
  styleUrls: ['./scheduler-page.component.scss']
})
export class SchedulerPageComponent implements OnInit {

  constructor() { }

  times: { hours: string }[] = [
    { hours: '8:00 AM'},
    { hours: '11:00 AM'},
    { hours: '2:00 PM'},
    { hours: '5:00 PM'},
    { hours: '8:00 PM'},
  ];

  weekdays: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
  ];

  checked = false;

  toggle(checked: boolean) {
    this.checked = checked;
  }

  ngOnInit(): void {
  }

}
