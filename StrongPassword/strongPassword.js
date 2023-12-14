// strongPassword.js

function isStrongPassword(password) {
    let hasLower = false;
    let hasUpper = false;
    let hasDigit = false;
    let repeatCharSteps = 0;
    let steps = 0;

    // Check each character of the password
    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (char >= 'a' && char <= 'z') hasLower = true;
        else if (char >= 'A' && char <= 'Z') hasUpper = true;
        else if (char >= '0' && char <= '9') hasDigit = true;

        // Check for repeating characters
        if (i > 1 && char === password[i - 1] && char === password[i - 2]) {
            repeatCharSteps++;
            i++; // Skip one character to avoid counting overlapping repeats
        }
    }

    const missingTypes = 3 - (hasLower + hasUpper + hasDigit);

    if (password.length < 6) {
        steps = Math.max(6 - password.length, missingTypes, repeatCharSteps);
    } else if (password.length > 20) {
        const excessLength = password.length - 20;
        steps = excessLength + Math.max(missingTypes, repeatCharSteps);
    } else {
        steps = Math.max(missingTypes, repeatCharSteps);
    }

    return steps;
}

module.exports = isStrongPassword;
