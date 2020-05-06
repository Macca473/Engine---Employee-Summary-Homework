// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require(`./Employee`);
class Manager extends Employee {
    constructor(name,email,id,officeMember) {
        super (name, `Manager`, email, id);
        this.officeMember = officeMember;
    }

    getOfficeNumber() {
        return this.officeMember;
    }

    getRole() {
        return 'Manager';
    }
}
module.exports = Manager;