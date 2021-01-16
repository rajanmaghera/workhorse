import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-nb-sidebar-toggle',
  templateUrl: './nb-sidebar-toggle.component.html',
  styleUrls: ['./nb-sidebar-toggle.component.scss']
})


export class NbSidebarToggleComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService) { }

  toggle() {
    this.sidebarService.toggle(true);

  }

  ngOnInit(): void {
  }

}
