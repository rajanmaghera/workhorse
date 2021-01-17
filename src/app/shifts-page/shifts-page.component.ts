import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shifts-page',
  templateUrl: './shifts-page.component.html',
  styleUrls: ['./shifts-page.component.scss']
})
export class ShiftsPageComponent implements OnInit {

  shifts: {date: string, time: string, length: string}[] = [
    {date: "Wednesday, January 20", time: "11:00 AM", length: "4 hours"},
    {date: "Thursday, January 21", time: "8:00 AM", length: "8 hours"},
    {date: "Friday, January 22", time: "2:00 PM", length: "4 hours"},
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
