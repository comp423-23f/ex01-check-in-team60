export class User {
    constructor(
        private firstName: String,
        private lastName: String,
        private pid: String)
      {}
    
      private setFN(fn: String): void {
        this.firstName = fn;
      }
    
      private setLN(ln: String): void {
        this.lastName = ln;
      }
    
      private setPID(pid: String): void {
        this.pid = pid;
      }
    
      getFN(): String {
        return this.firstName;
      }
    
      getLN(): String {
        return this.lastName;
      }
    
      getPID(): String {
        return this.pid;
      }
}