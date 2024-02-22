import { useState } from "react";
type Account = {
    name: string;
    nickName: string;
    email: string;
    password: string;
    passwordCheck: string;
}

const useAuthChange = ()=>{
    const [authData, setAuthData] = useState <Account>({
        name: "",
        nickName: "",
        email: "",
        password: "",
        passwordCheck: ""
    });
    const [isError, setIsError] = useState({
        passwordErr: '',
        nickNameErr: '',
        emailErr: ''
    });

    const [selectedFile, setselectedFile] = useState<File | null>(null);
    const [viewAvatar, setViewAvatar] = useState<any>(null);
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
            setAuthData(current => ({
                ...current,
                [name]: value
            }));

        };
        if (name === 'email') {
            setAuthData(current => ({
                ...current,
                [name]: value
            }));

        };
        if (name === 'nickName') {
            setAuthData(current => ({
                ...current,
                [name]: value
            }));

        };
        if (name === 'password') {
            setAuthData(current => ({
                ...current,
                [name]: value
            }));

        };
        if (name === 'passwordCheck') {
            setAuthData(current => ({
                ...current,
                [name]: value
            }));

        };

        if (authData.password !== authData.passwordCheck) {
            setIsError(current => ({
                ...current,
                passwordErr: "비밀번호가 올바르지 않습니다"
            }))

        }
    }
    return{
        authData,
        selectedFile,
        viewAvatar,
        onChange,
        isError,
        setIsError,
    }
}


export default useAuthChange;