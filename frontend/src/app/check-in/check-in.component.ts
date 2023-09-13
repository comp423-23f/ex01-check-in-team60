import { Component } from '@angular/core';

import { CheckInService } from '../check-in.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css'],
  providers: [CheckInService]
})
export class CheckInComponent {

  constructor(
    private formBuilder: FormBuilder,
    private checkInService: CheckInService) {
  }

  registerForm = this.formBuilder.group({
    pid: '',
  });

  onSubmit(): void {
    //console.warn('Values: ', this.registerForm.value);
    let pid = this.registerForm.value.pid;
    
    if (pid === undefined || pid === null) {

      window.alert('Please fill in all boxes.');

    } else if (isNaN(+pid)) {

      window.alert('PID must be numerical.');

    } else if ((+pid).toString().length != 9) {

      window.alert('PID must have 9 digits.');
    
    } else if (this.checkInService.getUserFromPID(pid) === undefined) {

      // WIP: Warn if PID does not correspond to user
      window.alert('PID not found.');

    } else {

      let name = this.checkInService.getNameFromPID(pid);
      
      window.alert(name + ' is checked in.');
      this.registerForm.reset();

    }
  }

}
