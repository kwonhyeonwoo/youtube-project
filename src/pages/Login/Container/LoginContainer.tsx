import React, { useState } from 'react';
import Login from '../Login';
import { useNavigate } from 'react-router-dom';

const LoginContainer = () => {
    const [nickName, setNickName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isError, setIsError] = useState({
        nickNameErr: "",
        passwordErr: ""
    })
    const navigate = useNavigate();
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        if (name === 'nickName') {
            setNickName(value)
        };
        if (name === 'password') {
            setPassword(value)
        };
    }
    const LoginSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {

            const response = await fetch('http://localhost:4000/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nickName: nickName,
                    password: password
                })
            })
            const responseData = await response.json();
            if (response.status === 200) {
                localStorage.setItem('token', responseData.token);
                navigate('/')
            }
            if (response.status === 400) {

                return setIsError(err => ({
                    ...err,
                    nickNameErr: responseData.msg
                }))
            }
            if (response.status === 401) {
                return setIsError(err => ({
                    ...err,
                    passwordErr: responseData.msg
                }))
            }
        } catch (error) {
            console.log('server error', error)
        }
    }
    return (
        <Login
            ChangeData={onChange}
            LoginSubmit={LoginSubmit}
            isError={isError}
        />
    );
};

export default LoginContainer;