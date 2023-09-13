import { Component } from '@angular/core';

import { RegisterService } from '../register.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {

  users = this.registerService.getUsers();
  
  constructor(private registerService: RegisterService) {}

}
