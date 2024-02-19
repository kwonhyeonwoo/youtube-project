import React, { Fragment } from 'react';
import "./css/index.css";
import { Link } from 'react-router-dom';
type Props = {
    ChangeData: (event: React.ChangeEvent<HTMLInputElement>) => void;
    LoginSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isError: {
        nickNameErr: string;
        passwordErr: string;
    }

}
const Login = ({
    ChangeData,
    LoginSubmit,
    isError
}: Props) => {
    return (
        <main className='login-page'>
            <section className='login-section'>
                <h1 className='title'>로그인</h1>
                <div className='login-info-wrapper'>
                    <form className='input-wrapper' encType='multipart/form-data'>
                        {accountArr.map((item, idx) => (
                            <Fragment>
                                <input
                                    onChange={ChangeData}
                                    key={idx}
                                    name={item.name}
                                    type={item.type}
                                    minLength={item.minLength}
                                    maxLength={item.maxLength}
                                    placeholder={item.placeholder}
                                />
                            </Fragment>
                        ))}
                        <button className='login-button' onClick={LoginSubmit}>회원가입</button>
                    </form>
                    {isError.nickNameErr && <div className='err-msg'>{isError.nickNameErr}</div>}
                    {isError.passwordErr && <div className='err-msg'>{isError.passwordErr}</div>}
                    <div className='account-link'>
                        <Link to={'/account'} >회원가입 하러가기 &rarr;</Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Login;

const accountArr = [
    {
        name: "nickName",
        type: "text",
        minLength: 3,
        maxLength: 9,
        placeholder: "닉네임"
    },

    {
        name: "password",
        type: "password",
        minLength: 8,
        maxLength: 9,
        placeholder: "비밀번호"
    },

]