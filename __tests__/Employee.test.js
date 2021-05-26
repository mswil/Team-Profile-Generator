const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

// Constructor
// ===========================================================

test('creates an employee object', () => {
    const employee = new Employee('Dave');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('dave@fakemail.com');
})

