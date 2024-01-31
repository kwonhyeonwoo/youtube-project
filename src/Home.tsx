import { useEffect, useState } from "react";
export type Data = {
    title: string;
    description: string;
    hashtags: string[];
    _id: string;
}
const Home = () => {
    const [data, setData] = useState<Data[]>([]);
    const DeleteVideo = async (id: string) => {
        await fetch(`http://localhost:4000/videos/delete/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',

            },
            body: JSON.stringify({
                id: id
            })
        })
    }
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4000', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "credentials": 'include'
                }
            });
            const responseData = await response.json();
            console.log('data', responseData)
        };
        fetchData();
    })
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('http://localhost:4000/videos', {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": 'application/json'
    //             }
    //         })
    //         const responseData = await response.json();
    //         if (response.status === 200) {
    //             setData(responseData);
    //         }
    //         if (!response.ok) {
    //             console.log('response error', responseData);
    //             console.log('error')
    //         }
    //     }
    //     fetchData();
    // }, []);
    
    console.log('data', data)
    return (
        <div>
            {data.map((item, idx) => (
                <div key={idx}>
                    <div>{item.title}</div>
                    <div>{item.description}</div>
                    <div> {item.hashtags}</div>
                    <button
                        onClick={() => DeleteVideo(data[idx]._id)}
                    >Delete</button>
                </div>
            ))}
        </div>
    )
}
export default Home;