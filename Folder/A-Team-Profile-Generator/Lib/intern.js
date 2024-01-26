const Employee = require("./employee"); //referencing to the parent class of an employee to expand it further
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email); //inherit name,id,class from an Employee class
    this.school = school;
  }
  getRole() {
    return "Intern";
  }
  getSchool(){
    return school;
  }
}
module.exports = Intern;
