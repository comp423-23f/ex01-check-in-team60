import { User } from "./user";

export class CheckIn {
    constructor(
        private user: User, 
        private date: Date) 
    {}

    setUser(user: User) {
        this.user = user;
    }

    setDate() {
        this.date = new Date();
    }

    getUser(): User {
        return this.user;
    }

    getDate(): Date {
        return this.date;
    }
}