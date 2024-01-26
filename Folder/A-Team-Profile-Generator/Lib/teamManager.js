const Employee = require("./employee"); //referencing to the parent class of an employee to expand it further
class teamManager extends Employee {
  constructor(name, id, email, officenumber) {
    super(name, id, email); //inherit name,id,class from an Employee class
    this.officenumber = officenumber;
  }
  getRole() {
    return "teamManager";
  }
}
module.exports = teamManager;
