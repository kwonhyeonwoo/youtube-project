import React, { useState } from 'react';
import Account from '../Account';
import { useNavigate } from 'react-router-dom';
import useAuthChange from '../../../hooks/useAuthChange';
type Account = {
    name: string;
    nickName: string;
    email: string;
    password: string;
    passwordCheck: string;
}

const AccountContainer = () => {
    const navigate = useNavigate();

    const{authData,selectedFile,viewAvatar, setIsError,isError,onChange} = useAuthChange();
    const AccountSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('avatar', selectedFile as Blob);
            formData.append('email', authData.email);
            formData.append('name', authData.name);
            formData.append('nickName', authData.nickName);
            formData.append('password', authData.password);
            console.log('foirmData', formData)
            const response = await fetch('http://localhost:4000/account', {
                method: "POST",
                body: formData,
            })
            const responseData = await response.json();
            if (response.ok) {
                console.log('responseData', responseData);
                navigate('/login')
            }
            if (response.status === 400) {
                setIsError(err => ({
                    ...err,
                    nickNameErr: responseData.msg
                }))
                console.log('iserror',isError)
                return responseData;
            }
            if (response.status === 401) {
                setIsError(err => ({
                    ...err,
                    emailErr: responseData.msg
                }))
                return responseData;
            }
        } catch (error) {
            console.log('server error', error)
        }
    }
    return <Account
        ChangeData={onChange}
        AccountSubmit={AccountSubmit}
        isError={isError}
        viewAvatar={viewAvatar}
    />
};

export default AccountContainer;