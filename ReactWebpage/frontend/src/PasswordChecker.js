// PasswordChecker.js

import React, { useState } from 'react';
import isStrongPassword from './strongPassword';

function PasswordChecker() {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const steps = isStrongPassword(password);
        setStrength(`Password Strength: ${steps} steps to make the password strong`);

        await fetch('http://localhost:5000/savePassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password, strength: steps }),
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Password:
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </label>
                <button type="submit">Check Password</button>
            </form>
            {strength && <p>{strength}</p>}
        </div>
    );
}

export default PasswordChecker;
