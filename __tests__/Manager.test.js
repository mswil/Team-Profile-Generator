const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

// Constructor
// ===========================================================
test('create manager object', () => {
    const manager = new Manager(1, 'Bob', 'bob@email', 117);

    //test inheritance
    expect(manager).toBeInstanceOf(Employee);

    expect(manager.officeNumber).toEqual(117);
})

// Methods
// ===========================================================
test('overide getRole()', () => {
    const manager = new Manager(44, 'Staci', 'staci@email');

    expect(manager.getRole()).toBe('Manager');
})
