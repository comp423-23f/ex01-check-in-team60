import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  private users: User[] = [];

  registerUser(user: User) {
    this.users.push(user);
  }

  getUsers() : User[] {
    return this.users.slice();
  }

  getUserFromPID(pid: String) : User | undefined {
    /**
     * Finds the User that matches a PID, or undefined if no matches are found.
     * @param {String} pid - The PID to be looked up.
     * @returns {User | undefined} User with matching PID.
     */ 
    return this.getUsers().find(user => user.getPID() === pid);
  }

  constructor(
  ) { }
}
