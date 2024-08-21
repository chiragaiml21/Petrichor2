import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        const storedUsername = localStorage.getItem('username');
        
        if (token && storedUsername) {
            setIsAuthenticated(true);
            setUsername(storedUsername);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('username');
        setIsAuthenticated(false);
        navigate('/');
    };

    if (!isAuthenticated) {
        return <p>Please log in to view your profile.</p>;
    }

    return (
        <div>
            <h1>Welcome, {username}!</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Profile;
