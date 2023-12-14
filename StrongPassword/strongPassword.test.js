// strongPassword.test.js

const isStrongPassword = require('./strongPassword');

// Test cases for passwords that are already strong
test('password "1337C0d3" is already strong', () => {
    expect(isStrongPassword('1337C0d3')).toBe(0);
});

test('password "Abc123" is already strong', () => {
    expect(isStrongPassword('Abc123')).toBe(0);
});

// Test cases for passwords that are too short
test('password "a" requires 5 steps to be strong', () => {
    expect(isStrongPassword('a')).toBe(5);
});

test('password "aA1" requires 3 steps to be strong', () => {
    expect(isStrongPassword('aA1')).toBe(3);
});


// Test cases for passwords lacking certain characters

test('password "123456" lacks lowercase and uppercase', () => {
    expect(isStrongPassword('123456')).toBe(2);
});

// Test cases for passwords with repeating characters
test('password "aaA1" has repeating lowercase and is short', () => {
    expect(isStrongPassword('aaA1')).toBe(2);
});

test('password "1337C0d3" is already strong', () => {
    expect(isStrongPassword('1337C0d3')).toBe(0);
});

test('password "1111aA" has repeating digits and is valid length', () => {
    expect(isStrongPassword('1111aA')).toBe(1);
});
