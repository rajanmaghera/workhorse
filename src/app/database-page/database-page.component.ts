import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-database-page',
  templateUrl: './database-page.component.html',
  styleUrls: ['./database-page.component.scss']
})
export class DatabasePageComponent implements OnInit {

  constructor(private newService: CommonService,) { }
    Repdata;
    valbutton= "Save";

  ngOnInit(): void {
    this.newService.getUser().subscribe(data => this.Repdata = data)
  }

  onSave = function(user,isValid: boolean) {
    user.mode = this.valbutton;
    this.newService.saveUser(user)
    .subscribe(data => { alert(data.data);
      this.ngOnInit();
    }, error => this.errorMessage = error )

  }


}
