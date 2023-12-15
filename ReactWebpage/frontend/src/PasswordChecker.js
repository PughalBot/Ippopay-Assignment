import React, { useState, useEffect } from 'react';
import isStrongPassword from './strongPassword';

function PasswordChecker() {
    // State hooks for password, strength, color, steps, and button disabled status
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('');
    const [strengthColor, setStrengthColor] = useState('red');
    const [steps, setSteps] = useState(0);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        // Check if the password is less than 6 characters long
        if (password.length < 6) {
            // Set state for a weak password
            setStrength('Password Strength: Weak');
            setStrengthColor('red');
            setIsButtonDisabled(true);
            setSteps(6 - password.length); // Calculate steps to reach minimum length
            return;
        }

        // Calculate strength for passwords of length 6 or more
        const calculatedSteps = isStrongPassword(password);
        let color = 'red';
        let message = 'Weak';

        // Adjust the strength message and color based on the calculated steps
        if (calculatedSteps <= 2) {
            color = 'green';
            message = 'Strong';
            setIsButtonDisabled(false);
        } else if (calculatedSteps <= 5) {
            color = 'yellow';
            message = 'Okay';
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }

        // Update state with the new strength message and color
        setStrength(`Password Strength: ${message}`);
        setStrengthColor(color);
        setSteps(calculatedSteps);
    }, [password]); // Effect runs whenever the password changes

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Post request to save password
        await fetch('http://localhost:5000/savePassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password, strength: steps }),
        });
    };

    // Inline styles for the button, dynamically changes based on the password strength
    const buttonStyle = {
        backgroundColor: strengthColor === 'green' ? '#10B981' : strengthColor === 'yellow' ? '#FBBF24' : '#EF4444',
        opacity: isButtonDisabled ? 0.25 : 1,
        cursor: isButtonDisabled ? 'not-allowed' : 'pointer'
    };

    // Inline styles for the strength message
    const strengthStyle = {
        color: strengthColor === 'green' ? '#10B981' : strengthColor === 'yellow' ? '#FBBF24' : '#EF4444',
    };

    // Inline styles for the box, including shadow color
    const boxStyle = {
        padding: '6px',
        boxShadow: `0 0 16px 8px #db1068`,
        borderRadius: '12px',
        backgroundColor: '#fff',
    };

    return (
        <div className="flex justify-center items-center h-screen bg-[#1a154b]">
            <div style={boxStyle} className="p-6 ml-2 mr-2 w-96 md:w-[500px] h-80 mx-auto rounded-xl flex flex-col justify-center items-center space-y-4">
                <div className='text-5xl font-hj font-bold'>Password Checker</div>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} // Update password state on change
                    className="mt-1 block w-80 md:w-96 rounded-md border-gray-300 shadow-sm focus:border-[#db1068] focus:ring focus:ring-[#db1068] focus:ring-opacity-50"
                />
                <button 
                    type="submit" 
                    onClick={handleSubmit} // Handle form submission
                    disabled={isButtonDisabled} // Button is disabled based on password strength
                    style={buttonStyle}
                    className={`px-4 py-2 w-fit text-white rounded hover:opacity-80`}>
                    Save Password
                </button>
                {password.length > 0 && strength && (
                    <div className="text-center text-md w-full" style={strengthStyle}>
                        {strength} {/* Display strength message */}
                        <br />
                        <div className='text-black'>
                            {steps > 0 && `${steps} steps to improve`} {/* Display steps to improve */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PasswordChecker;
