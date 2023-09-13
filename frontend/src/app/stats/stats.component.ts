import { Component } from '@angular/core';

import { RegisterService } from '../register.service';
import { CheckInService } from '../check-in.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
  //providers: [CheckInService]
})
export class StatsComponent {

  users = this.registerService.getUsers();
  checkIns = this.registerService.getCheckIns();
  
  constructor(private registerService: RegisterService) {}

}
