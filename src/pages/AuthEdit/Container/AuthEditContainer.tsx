import { useDispatch, useSelector } from "react-redux";
import AuthEdit from "../AuthEdit"
import { AppDispatch, RootState } from "../../../store";
import useAuthChange from "../../../hooks/useAuthChange";
import { faCircleH } from "@fortawesome/free-solid-svg-icons";

const AuthEditContainer = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data, error, loading } = useSelector((state: RootState) => state.getAuth);
    const {
        authData,
        selectedFile,
        viewAvatar,
        onChange,
        isError,
        setIsError
    } = useAuthChange();
    const AuthEditSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const formData = new FormData();
            formData.append('avatar', selectedFile as Blob);
            formData.append('email', authData.email ? authData.email : (data?.email || ""));
            formData.append('name', authData.name ? authData.name : (data?.name || ""));
            formData.append('nickName', authData.nickName ? authData.nickName : (data?.nickName || ""));
            console.log('form data', formData)
            const response = await fetch('http://localhost:4000/auth/edit', {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                body: formData
            })
            const responseData = await response.json();
            if (response.status === 200) {

                console.log('edit', responseData);
            };
            if (response.status === 400) {
                console.log('ddd', responseData)
                setIsError((current) => ({
                    ...current,
                    nickNameErr: responseData.msg
                }))
            }
            if (response.status === 401) {
                console.log('ddd', responseData)
                setIsError((current) => ({
                    ...current,
                    emailErr: responseData.msg
                }))

            }
        } catch (err) {
            console.log('server error', err)
        }

    }
    return <AuthEdit
        data={data}
        error={error}
        loading={loading}
        AuthEditSubmit={AuthEditSubmit}
        isError={isError}
        ChangeData={onChange}
    />
}

export default AuthEditContainer;