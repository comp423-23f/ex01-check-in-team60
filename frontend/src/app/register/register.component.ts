import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private formBuilder: FormBuilder, 
    private route: ActivatedRoute, 
    private userService: UserService) {
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

    } else {

      let user = new User(fn, ln, pid);
      this.userService.registerUser(user);
      window.alert('Thank you ' + user.getFN() + ' ' + user.getLN() + '! Please click the header to return home.');
      this.registerForm.reset();

    }
  }
}
