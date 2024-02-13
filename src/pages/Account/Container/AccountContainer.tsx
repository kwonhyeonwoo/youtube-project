import React, { useState } from 'react';
import Account from '../Account';
import { useNavigate } from 'react-router-dom';
type Account={
    avatar:any | null;
    name:string;
    nickName:string;
    email:string;
    password:string;
    passwordCheck:string;
}
const AccountContainer = () => {
    const [accountData, setAccountData] = useState<Account>({
        avatar:null,
        name:"",
        nickName:"",
        email:"",
        password:"",
        passwordCheck:""
    })
    const [isError, setIsError] = useState({
        passwordErr:"",
        nickNameErr:"",
        emailErr:"",
    });
    const navigate = useNavigate();
    const onChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const{value,files,name} = event.target;
        if(name === 'avatar'){
            if(files){
                setAccountData(current => ({
                    ...current,
                    avatar: files[0],
                }));
            }
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
        if(accountData.password !== accountData.passwordCheck){
            setIsError(current=>({
                ...current,
                passwordErr:"비밀번호가 올바르지 않습니다"
            }))
        }
    }
    const AccountSubmit = async(event:React.MouseEvent<HTMLButtonElement>)=>{
        try{
            const formData = new FormData();
            formData.append('avatar',accountData.avatar);
            formData.append('name',accountData.name);
            formData.append('nickName',accountData.nickName);
            formData.append('password',accountData.password);
            console.log('foirmData', formData)
            const response = await fetch('http://localhost:4000/account',{
                method:"POST",
                body:formData,
            })
            const responseData = await response.json();
            if(response.ok){
                console.log('responseData',responseData);
                navigate('/login')
            }
          
        }catch(error){  
            console.log('server error',error)
        }
    }
    return <Account
        ChangeData={onChange}
        AccountSubmit={AccountSubmit}
        isError={isError}
    />
};

export default AccountContainer;