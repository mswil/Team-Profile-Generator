const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

// Constructor
// ===========================================================
test('create intern object', () => {
    const intern = new Intern(1, 'elon', 'elon@email', 'techU');

    //test inheritance
    expect(intern).toBeInstanceOf(Employee);

    expect(intern.school).toBe('techU');
})

// Methods
// ===========================================================
test('getGithub()', () => {
    const intern = new Intern(50, 'bezos', 'bezos@email', 'collegeTech');

    expect(intern.getSchool()).toBe('collegeTech');
})

test('override getRole()', () => {
    const intern = new Intern(29, 'gates', 'gates@email', 'dropout');

    expect(intern.getRole()).toBe(`Intern`);
})