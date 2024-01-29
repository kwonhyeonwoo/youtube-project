import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
type Data = {
    email: string;
    name: string;
    userId: string
    password: string
}
const VideoSubmit = () => {
    const [data, setData] = useState<Data>({
        email: '',
        name: '',
        userId: '',
        password: ''
    });
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === 'email') {
            setData(current => ({
                ...current,
                email: value
            }));
        }
        if (name === 'name') {
            setData(current => ({
                ...current,
                name: value
            }));
        }
        if (name === 'userId') {
            setData(current => ({
                ...current,
                userId: value
            }));
        }
        if (name === 'password') {
            setData(current => ({
                ...current,
                password: value
            }));
        }
    }
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('data', data)
        try {
            const response = await fetch('http://localhost:4000/account', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    "credentials": 'include'

                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            if (response.ok) {
                return console.log('responseDat', responseData)
            }
            if (!response.ok) {
                console.log('error;', responseData)
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            console.log('responseData', responseData);
        } catch (error) {
            console.error('Error during fetching:', error);
        }
        console.log('data', data)
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="email" onChange={onChange} name='email' />
                <input type="text" onChange={onChange} name='name' />
                <input type="text" onChange={onChange} name='userId' />
                <input type="password" onChange={onChange} name='password' />
                <button>submit</button>
            </form>
        </div>
    )
}

export default VideoSubmit;