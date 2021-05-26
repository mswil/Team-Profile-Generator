const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

// Constructor
// ===========================================================
test('create manager object', () => {
    const manager = new Manager('Bob');

    //test inheritance
    expect(manager).toBeInstanceOf(Employee);

    expect(manager.officeNumber).toEqual(expect.any(Number));
})

// Methods
// ===========================================================
test('overide getRole()', () => {
    const manager = new Manager('Staci');

    expect(manager.getRole()).toBe('Manager');
})
