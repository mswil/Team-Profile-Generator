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

test('getName()', () => {
    const employee = new Employee('Joel');

    expect(employee.getName()).toBe('Joel');
})

test('getId()', () => {
    const employee = new Employee('Henrey');

    expect(employee.getId()).toEqual(expect.any(Number));
})