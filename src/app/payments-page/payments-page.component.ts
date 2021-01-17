import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments-page',
  templateUrl: './payments-page.component.html',
  styleUrls: ['./payments-page.component.scss']
})
export class PaymentsPageComponent implements OnInit {


  payments: {date: string, payment: string, hours: string}[] = [
    {date: "Wednesday, January 20", payment: "$720.00", hours: "40 hours"},
    {date: "Wednesday, January 6", payment: "$731.00", hours: "40 hours"},
    {date: "Friday, December 23", payment: "$718.00", hours: "40 hours"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
