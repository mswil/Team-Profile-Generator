const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '') {
        super(name);

        //TODO: make sure office number is/isn't assigned by logic
        this.officeNumber = 12;
    }

    getRole() {
        return `Manager`;
    }
}

module.exports = Manager;