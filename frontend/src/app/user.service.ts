import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private users: User[] = [];

  registerUser(user: User) {
    this.users.push(user);
  }

  getUsers() : User[] {
    return this.users.slice();
  }

  constructor(
  ) { }
}
