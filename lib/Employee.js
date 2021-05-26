class Employee {
    constructor(name = '') {
        this.name = name;
        //TODO: logic for assigning id
        this.id = 1;
        this.email = name.toLowerCase() + '@fakemail.com'
    }
}

module.exports = Employee;