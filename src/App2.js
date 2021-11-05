import React, { useState } from 'react';
import Axios from 'axios'
import './App.css';

function App() {

    const [UsernameRegister, setUsername] = useState("");
    const [PasswordRegister, setPassword] = useState("");

    const Register = () => {
        Axios.post('http://localhost:3001/register', {
            username: UsernameRegister,
            password: PasswordRegister,
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <div className="App">
            <div className="Registration">
                <h1>Registration</h1>
                <label>Username</label>
                <input
                    type="text"
                    onChange={(e)=> {
                        setUsername(e.target.value);
                    }}/>
                <label>Password</label>
                <input
                    type="text"
                    onChange={(e)=> {
                        setPassword(e.target.value);
                    }}/>
                <button onClick={Register}>Register</button>
            </div>
            <div className="Login">
            <h1>login</h1>
            <input type="text" placeholder="Username..."/>
            <input type="text" placeholder="Password..."/>
            <button>login</button>
            </div>
        </div>
    );
}

export default App;