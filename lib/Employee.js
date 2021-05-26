let employeeId = 0;

class Employee {
    constructor(name = '') {
        this.name = name;
        //TODO: logic for assigning id
        this.id = employeeId++;
        this.email = name.toLowerCase() + '@fakemail.com'
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return `Employee`;
    }
}

module.exports = Employee;