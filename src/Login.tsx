import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        userId: '',
        password: '',
    })
    const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === 'userId') {
            setData((prev) => ({
                ...prev,
                userId: value
            }))
        }
        if (name === 'password') {
            setData((prev) => ({
                ...prev,
                password: value
            }))
        }
    }
    const onLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await fetch('http://localhost:4000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "credentials": 'include'
            },
            body: JSON.stringify({
                userId: data.userId,
                password: data.password
            })
        });
        const responseData =await  response.json();
        console.log('response', responseData)
    }
    return (
        <div>
            <form onSubmit={onLoginSubmit}>
                <input type="text" onChange={onChange} name='userId' />
                <input type="password" onChange={onChange} name='password' />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;