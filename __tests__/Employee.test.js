const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

// Constructor
// ===========================================================
test('creates an employee object', () => {
    const employee = new Employee(12, 'Dave', 'dave@email');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(12);
    expect(employee.email).toBe('dave@email');
})

// Methods
// ===========================================================
test('getName()', () => {
    const employee = new Employee(50, 'Joel', 'joel@email');

    expect(employee.getName()).toBe('Joel');
})

test('getId()', () => {
    const employee = new Employee(73, 'Henry', 'h-dog');

    expect(employee.getId()).toEqual(expect.any(Number));
})

test('getEmail()', () => {
    const employee = new Employee(75, 'john', 'John@email');

    expect(employee.getEmail()).toBe('John@email');
})

test('getRole()', () => {
    const employee = new Employee(30, 'Josephine', 'luckyJo-Jo@email');

    expect(employee.getRole()).toBe('Employee');
})