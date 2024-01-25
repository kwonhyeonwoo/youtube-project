import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export type Video={
    description:string;
    hashtags:string[];
    meta:{
        views:number,
        rating:number,
    },
    title:string;
    _id:string;
}
const Video = () =>{
    const [videos, setVideos] = useState <Video[]>([]);
    const params= useParams();
    const id = videos.map((item) => item._id);

    console.log('pa',params)
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
    

    console.log('v', typeof id.join())
    return(
        <div>
            {id.join() === params.id && (
                <div>
                    {
                        videos.map((item,idx)=>(
                            <div >
                                {item.description}
                                {item.title}
                                {item.hashtags}
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    )
}

export default Video;