import React, { Fragment } from "react";
import "./css/index.css";
import { AuthData } from "../../store/authSlice";

type Props ={
    input:{
        id?:string;
        name:string;
        type:string;
        required:boolean;
        minLength?:number;
        maxLength?:number;
        value?:string;
    }[];
    data? : AuthData | null;
    ChangeData: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

const AuthInput = ({ input, ChangeData, data }:Props)=>{
    return(
       <Fragment>
            {input.map(({ id, name, type, required, maxLength, minLength,value }, idx) => (
                <input
                    className="auth-input"
                    id={id}
                    name={name}
                    type={type}
                    required={required}
                    maxLength={maxLength}
                    minLength={minLength}
                    key={idx}
                    placeholder={name}
                    defaultValue={value}
                    onChange={ChangeData}
                />
        ))}
        </Fragment>
    )
}
export default AuthInput;