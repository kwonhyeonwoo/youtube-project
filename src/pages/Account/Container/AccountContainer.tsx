import React, { useState } from 'react';
import Account from '../Account';
import { useNavigate } from 'react-router-dom';
type Account = {
    name: string;
    nickName: string;
    email: string;
    password: string;
    passwordCheck: string;
}

const AccountContainer = () => {
    const [accountData, setAccountData] = useState<Account>({
        name: "",
        nickName: "",
        email: "",
        password: "",
        passwordCheck: ""
    })
    const [isError, setIsError] = useState({
        passwordErr: '',
        nickNameErr: '',
        emailErr: ''
    });
    const [selectedFile, setselectedFile] = useState<File | null>(null);
    const [viewAvatar, setViewAvatar] = useState<any>(null);
    const navigate = useNavigate();
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, files, name } = event.target;
        const fileReader = new FileReader();

        if (name === 'avatar' && files && files.length > 0) {
            setselectedFile(files[0])
            fileReader.readAsDataURL(files[0]);
            return new Promise<void>((resolve) => {
                fileReader.onload = () => {
                    setViewAvatar(fileReader.result);
                    resolve();
                };
            });
        };
        if (name === 'name') {
            setAccountData(current => ({
                ...current,
                name: value
            }));
        };
        if (name === 'email') {
            setAccountData(current => ({
                ...current,
                email: value
            }));
        };
        if (name === 'nickName') {
            setAccountData(current => ({
                ...current,
                nickName: value
            }));
        };
        if (name === 'password') {
            setAccountData(current => ({
                ...current,
                password: value
            }));
        };
        if (name === 'passwordCheck') {
            setAccountData(current => ({
                ...current,
                passwordCheck: value
            }));
        };

        if (accountData.password !== accountData.passwordCheck) {
            setIsError(current => ({
                ...current,
                passwordErr: "비밀번호가 올바르지 않습니다"
            }))
        }
    }
    const avatarCancel = () => {
        setViewAvatar(null)
    }
    const AccountSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('avatar', selectedFile as Blob);
            formData.append('email', accountData.email);
            formData.append('name', accountData.name);
            formData.append('nickName', accountData.nickName);
            formData.append('password', accountData.password);
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
        avatarCancel={avatarCancel}
    />
};

export default AccountContainer;