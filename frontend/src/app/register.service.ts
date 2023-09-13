import { Injectable } from '@angular/core';
import { User } from './user';
import { CheckIn } from './check-in';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  private users: User[] = [];
  private checkIns: CheckIn[] = [];

  checkInUser(user: User) : void {
    this.checkIns.push(new CheckIn(user, new Date()));
    console.warn("User " + user.getFN() + " " + user.getLN() + " has checked in at " + (new Date()).toLocaleTimeString());
    // this.checkIns.sort((checkInA, checkInB) => checkInA.getDate().getTime() - checkInB.getDate().getTime());
  }

  registerUser(user: User) {
    this.users.push(user);
  }

  getCheckIns(): CheckIn[] {
    return this.checkIns.slice();
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
