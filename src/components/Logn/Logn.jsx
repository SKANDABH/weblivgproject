    import React, { useState } from 'react';
    import './Logn.css';
    import { Link } from 'react-router-dom';

    const Logn = () => {
        const [passwordVisible, setPasswordVisible] = useState(false);

        const toggleVisibility = () => {
            setPasswordVisible(prevState => !prevState);
        };

        const handleSub = async (e) => {
            e.preventDefault();

            // Fetch input values
            const username = e.target.elements.username.value;
            const password = e.target.elements.password.value;
console.log(username);
            try {
                const response = await fetch('http://localhost:3001/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: username, password })
                });

                const data = await response.json();
                console.log(data.message);  // Assuming backend responds with a message

                // TODO: Handle the response appropriately (e.g., show a message to the user)

            } catch (error) {
                console.error('Error:', error);
            }
        };

        return (
            <div className="login">
                <div className="container">
                    <form onSubmit={handleSub}>
                        <h1>Login</h1>
                        <div className="inputbox">
                            <input type="text" placeholder="Username" name="username" required />
                            <i className='bx bxs-user-circle'></i>
                        </div>
                        <div className="inputbox">
                            <input type={passwordVisible ? "text" : "password"} placeholder="Password" id="password" name="password" required />
                            <i className='bx bxs-lock-alt' onClick={toggleVisibility}></i>
                        </div>
                        <div className="rmember-forget">
                            <label><input type="checkbox" />Remember me</label>
                            <a href="/login">Forgot Password?</a>
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <div className="register">
        
                            <p>Don't have an account here?<Link to="/Signup">Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    export default Logn;
