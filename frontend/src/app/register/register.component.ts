import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { last } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  private firstName: string;
  private lastName: string;
  private pid: string;

  constructor(private formBuilder: FormBuilder) {
    this.firstName = '';
    this.lastName = '';
    this.pid = '';
    
  }

  registerForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    pid: '',
  });

  private setFN(fn: string): void {
    this.firstName = fn;
  }

  private setLN(ln: string): void {
    this.lastName = ln;
  }

  private setPID(pid: string): void {
    this.pid = pid;
  }

  getFN(): string {
    return this.firstName;
  }

  getLN(): string {
    return this.lastName;
  }

  getPID(): string {
    return this.pid;
  }

  onSubmit(): void {
    console.warn('Values: ', this.registerForm.value);
    let fn = this.registerForm.value.firstName;
    let ln = this.registerForm.value.lastName;
    let pid = this.registerForm.value.pid;
    
    if (fn === undefined || 
      fn === null || 
      ln === undefined || 
      ln === null || 
      pid === undefined || 
      pid === null) {
      window.alert('Please fill in all boxes.')
    } else {
      this.setFN(fn);
      this.setLN(ln);
      this.setPID(pid);
      this.registerForm.reset();
      window.alert('Thank you ' + this.firstName + ' ' + this.lastName + '! Please click the header to return home.');
    }
  }
}
