const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

// Constructor
// ===========================================================
test('create engineer object', () => {
    const engineer = new Engineer(1, 'Bob', 'bob@email', 'bobGithub');

    //test inheritance
    expect(engineer).toBeInstanceOf(Employee);

    expect(engineer.github).toBe('bobGithub');
})

// Methods
// ===========================================================
test('getGithub()', () => {
    const engineer = new Engineer(50, 'Hari', 'hari@email', 'hariGithub');

    expect(engineer.getGithub()).toBe('hariGithub');
})

test('override getRole()', () => {
    const engineer = new Engineer(29, 'Taylor', 'taylor@email', 'taylorGithub');

    expect(engineer.getRole()).toBe(`Engineer`);
})