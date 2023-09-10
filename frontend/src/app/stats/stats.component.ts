import { Component } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {

  users = this.userService.getUsers();
  
  constructor(private userService: UserService) {}

}
