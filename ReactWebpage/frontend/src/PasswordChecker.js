import React, { useState, useEffect } from 'react';
import isStrongPassword from './strongPassword';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function PasswordChecker() {
    const navigate = useNavigate(); // Initialize navigate
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('');
    const [strengthColor, setStrengthColor] = useState('red');
    const [steps, setSteps] = useState(0);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        if (password.length < 6) {
            setStrength('Password Strength: Weak');
            setStrengthColor('red');
            setIsButtonDisabled(true);
            setSteps(6 - password.length);
            return;
        }

        const calculatedSteps = isStrongPassword(password);
        let color = 'red';
        let message = 'Weak';

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

        setStrength(`Password Strength: ${message}`);
        setStrengthColor(color);
        setSteps(calculatedSteps);
    }, [password]);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        console.log('Button clicked, sending request'); // Debug log
    
        try {
            const response = await fetch('http://localhost:5000/savePassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password, strength: steps }),
            });
    
            console.log('Response received:', response); // Debug log
    
            if (response.ok) {
                console.log('Redirecting to thank-you page'); // Debug log
                navigate('/thank-you');
            } else {
                console.error('Error saving password, response not ok');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    const buttonStyle = {
        backgroundColor: strengthColor === 'green' ? '#10B981' : strengthColor === 'yellow' ? '#FBBF24' : '#EF4444',
        opacity: isButtonDisabled ? 0.25 : 1,
        cursor: isButtonDisabled ? 'not-allowed' : 'pointer'
    };

    const strengthStyle = {
        color: strengthColor === 'green' ? '#10B981' : strengthColor === 'yellow' ? '#FBBF24' : '#EF4444',
    };

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
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block py-2 w-80 md:w-96 rounded-md border-pink border-2 shadow-sm focus:border-pink focus:ring focus:ring-[#db1068] focus:ring-opacity-50"
                />
                <button 
                    type="submit" 
                    onClick={handleSubmit}
                    disabled={isButtonDisabled}
                    style={buttonStyle}
                    className={`px-4 py-2 w-fit text-white rounded hover:opacity-80`}>
                    Save Password
                </button>
                {password.length > 0 && strength && (
                    <div className="text-center text-md w-full" style={strengthStyle}>
                        {strength}
                        <br />
                        <div className='text-black'>
                            {steps > 0 && `${steps} steps to improve`}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PasswordChecker;
