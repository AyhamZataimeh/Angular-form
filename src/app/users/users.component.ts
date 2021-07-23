import { Component, OnInit } from '@angular/core';
import { myService } from '../myservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users=[];
  userID='';

  constructor(private service:myService) { }

  ngOnInit(): void {
    this.users=this.service.users;
  }

}
