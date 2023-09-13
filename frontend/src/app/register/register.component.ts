import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { User } from '../user';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private formBuilder: FormBuilder, 
    private route: ActivatedRoute, 
    private registerService: RegisterService) {
  }

  registerForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    pid: '',
  });

  onSubmit(): void {
    console.warn('Values: ', this.registerForm.value);
    let fn = this.registerForm.value.firstName;
    let ln = this.registerForm.value.lastName;
    let pid = this.registerForm.value.pid;
    
    if (fn === undefined || fn === null || 
      ln === undefined || ln === null || 
      pid === undefined || pid === null) {

      window.alert('Please fill in all boxes.')

    } else if (isNaN(+pid)) {

      window.alert('PID must be numerical.')

    } else if ((+pid).toString().length != 9) {

      window.alert('PID must have 9 digits.');
    
    }  else {

      let user = new User(fn, ln, pid);
      this.registerService.registerUser(user);
      window.alert('Thank you ' + user.getFN() + ' ' + user.getLN() + '! Please click the header to return home.');
      this.registerForm.reset();

    }
  }
}
