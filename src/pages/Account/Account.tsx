import React, { Fragment } from 'react';
import "./css/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

type Props = {
    ChangeData: (event: React.ChangeEvent<HTMLInputElement>) => void;
    AccountSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isError: {
        passwordErr: string;
        nickNameErr: string;
        emailErr: string;
    }
    viewAvatar: string;
}
const Account = ({
    ChangeData,
    AccountSubmit,
    isError,
    viewAvatar,
}: Props) => {
    return (
        <main className='account-page'>
            <section className='account-section'>
                <h1 className='title'>회원가입</h1>
                <div className='account-info-wrapper'>
                    <form className='input-wrapper' encType='multipart/form-data'>
                        <label className='profile-img-choice' htmlFor="avatar">
                            {viewAvatar ? <img src={viewAvatar} /> : <FontAwesomeIcon icon={faCamera} />}
                        </label>
                        {accountArr.map((item, idx) => (
                            <Fragment>
                                <input
                                    onChange={ChangeData}
                                    id={item.id}
                                    key={idx}
                                    name={item.name}
                                    type={item.type}
                                    minLength={item.minLength}
                                    maxLength={item.maxLength}
                                    placeholder={item.placeholder}
                                />
                            </Fragment>
                        ))}
                        <button className='account-button' onClick={AccountSubmit}>회원가입</button>
                        {isError.emailErr && <div className='err-msg'>{isError.emailErr}</div>}
                        {isError.nickNameErr && <div className='err-msg'>{isError.nickNameErr}</div>}
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Account;


const accountArr = [
    {
        name: "avatar",
        id: "avatar",
        type: "file",
        placeholder: ""
    },
    {
        name: "name",
        type: "text",
        minLength: 2,
        maxLength: 6,
        placeholder: "이름"
    },
    {
        name: "nickName",
        type: "text",
        minLength: 3,
        maxLength: 9,
        placeholder: "닉네임"
    },
    {
        name: "email",
        type: "email",
        placeholder: "이메일"
    },
    {
        name: "password",
        type: "password",
        minLength: 8,
        maxLength: 9,
        placeholder: "비밀번호"
    },
    {
        name: "passwordCheck",
        type: "password",
        minLength: 8,
        maxLength: 9,
        placeholder: "비밀번호 확인"
    }
]