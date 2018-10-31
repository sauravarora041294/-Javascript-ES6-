import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AjaxService} from '../../../services/ajax.service';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  @Input() data: any;
  @Output() getUser = new EventEmitter<boolean>();
  @Output() getUserData = new EventEmitter<Object>();
  constructor(public httpService: AjaxService ) {}

  ngOnInit() {
  }

  public deleteRow(id: number) {
     this.httpService.deleteUser(id).subscribe((res) => {
       console.log(res);
       this.getUser.emit(true);
     });
  }

  public getUserById(userId, body) {

    this.httpService.getUserById(userId).subscribe((res) => {
      console.log(res);
      this.getUserData.emit(res['data']);
    });
  }
}
