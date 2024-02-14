import React, { Fragment } from 'react';
import "./css/index.css";
type Props={
    ChangeData : (event:React.ChangeEvent<HTMLInputElement>)=>void;
    LoginSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;


}
const Login = ({
    ChangeData,
    LoginSubmit
}:Props) => {
    return (
        <main className='account-page'>
            <section className='account-section'>
                <h1 className='title'>회원가입</h1>
                <div className='account-info-wrapper'>
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
                        <button className='account-button' onClick={LoginSubmit}>회원가입</button>
                    </form>
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