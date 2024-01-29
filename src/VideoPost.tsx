import { useEffect, useState } from "react";
import { Video } from "./Video";
import { useParams } from "react-router-dom";

const VideoPost = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const params = useParams();
    const [data, setData] = useState({
        title: '',
        description: '',
        hashtags: ''
    })
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === 'title') {
            setData((prev) => ({
                ...prev,
                title: value
            }))
        };
        if (name === 'description') {
            setData((prev) => ({
                ...prev,
                description: value
            }))
        };
        if (name === 'hashtags') {
            setData((prev) => ({
                ...prev,
                hashtags: value
            }))
        }
    }
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const res = await fetch('http://localhost:4000/videos/edit', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',

            },
            body: JSON.stringify({
                title: data.title,
                description: data.description,
                hashtags: data.hashtags,
                id: params.id
            })
        });
        console.log('res', res)
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4000/videos', {
                    method: "GET",
                    headers: {
                        "Content-Type": "applicaation/json",
                        "credentials": "include"
                    }
                })
                const responseData = await response.json();
                setVideos(responseData);
                console.log('responseData', responseData);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, [])
    return (
        <div>
            <form action="" onSubmit={onSubmit}>
                <input type="text" placeholder={videos[0]?.title} name='title' onChange={onChange} />
                <input type="text" placeholder={videos[0]?.description} name='description' onChange={onChange} />
                <input type="text" value={videos[0]?.hashtags} onChange={onChange} name='hashtags' />
                <button>submit</button>
            </form>
        </div>
    )
};

export default VideoPost;