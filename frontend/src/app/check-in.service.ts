import { Injectable } from '@angular/core';
import { RegisterService } from './register.service';
import { User } from './user';
import { CheckIn } from './check-in';

@Injectable()
export class CheckInService {

  checkInUser(user: User) : void {
    this.registerService.checkInUser(user);
  }

  getCheckIns() : CheckIn[] {
    return this.registerService.getCheckIns();
  }

  getUserFromPID(pid: String) : User | undefined {
    return this.registerService.getUserFromPID(pid);
  }

  getNameFromPID(pid: String) : String {
    let name = this.getUserFromPID(pid);
    return name?.getFN() + ' ' + name?.getLN();
  }

  constructor(private registerService: RegisterService) {
    
  }

}
