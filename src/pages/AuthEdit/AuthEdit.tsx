import React from "react";
import AuthInput from "../../components/AuthInput/AuthInput";
import "./css/index.css";
import { AuthData } from "../../store/authSlice";
type Props = {
    data: AuthData | null;
    error: string | null;
    loading: boolean;
    AuthEditSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isError: {
        nickNameErr: string;
        emailErr: string;
    }
    ChangeData: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const AuthEdit = ({ data, error, loading, AuthEditSubmit, isError, ChangeData }: Props) => {
    const userInfoArr = [
        {
            id: "avatar",
            name: "avatar",
            type: "file",
            required: false
        },
        {
            name: "name",
            type: "text",
            minLength: 2,
            maxLength: 6,
            required: false,
            value: data?.name

        },
        {
            name: "nickName",
            type: "text",
            minLength: 3,
            maxLength: 9,
            required: false,
            value: data?.nickName
        },
        {
            name: "email",
            type: "email",
            required: true,
            value: data?.email
        },
    ]
    return (
        <main className="auth-edit-page">
            <section className="edit-section">
                <div className="edit-wrapper">
                    <form action="" className="edit-form">
                        <label htmlFor="avatar">
                            {data?.avatar ?
                                <img src={`http://localhost:4000/${data.avatar}`} alt="avatar" className="avatar avatar-img" />
                                : <div className="avatar no-avatar" />
                            }
                        </label>
                        <div className="input-wrapper">
                            <AuthInput input={userInfoArr} ChangeData={ChangeData}  data={data}/>
                            <button onClick={AuthEditSubmit} className="edit-btn">수정하기</button>
                        </div>
                    </form>
                    <div className="err-box">
                        {/* 나중에 에러문구 작업 */}
                    </div>
                </div>
            </section>
        </main>
    )
};

export default AuthEdit;

