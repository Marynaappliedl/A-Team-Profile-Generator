const Employee = require('./employee');
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name,id,email);
        this.github= github;
    } 
    greetEngineer() {
        console.log(
            "Hello, " + this.employeeName +
            "! Your employee ID is " + this.employeeID);

    }
    getRole(){
        return 'Engineer'
    };
}
module.exports= Engineer

// const a = new Engineer(123, "employeemail@email.com","employeeGit")