// App.js or your main application file
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PasswordChecker from './PasswordChecker';
import ThankYou from './ThankYou';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PasswordChecker />} />
                <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
        </Router>
    );
}

export default App;
