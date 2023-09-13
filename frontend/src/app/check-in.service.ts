import { Injectable } from '@angular/core';
import { RegisterService } from './register.service';
import { User } from './user';

@Injectable()
export class CheckInService {

  getUserFromPID(pid: String) : User | undefined {
    return this.registerService.getUserFromPID(pid);
  }

  getNameFromPID(pid: String) : String {
    let name = this.getUserFromPID(pid);
    return name?.getFN() + ' ' + name?.getLN();
  }

  constructor(private registerService: RegisterService) {
    
  }

  checkInUser(pid : String): void {
    // TODO
  }

}
