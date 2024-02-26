import React, { useState } from "react";
import VideoUpload from "../VideoUpload"

const VideoUploadContainer = () => {
    const [videoUrl, setVideoUrl] = useState<File | null>(null);
    const [videoData, setVideoData] = useState({
        title: "",
        description: "",
        hashtags: [""],
    })
    const VideoDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = event.target;
        if (name === 'title') {
            setVideoData(current => ({
                ...current,
                title: value
            }));
        }

        if (name === 'hashtags') {
            setVideoData(current => ({
                ...current,
                hashtags: [value]
            }));
        };
        if (name === 'videoUrl' && files && files.length > 0) {
            if (event.target instanceof HTMLInputElement && event.target.files && event.target.files.length > 0) {
                setVideoUrl(event.target.files[0]);
            }
        }
    }
    const DescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value, name } = event.target;
        if (name === 'description') {
            setVideoData(current => ({
                ...current,
                description: value
            }));
        };
    }
    const VideoUploadSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        const formData = new FormData();
        formData.append('title', videoData.title)
        formData.append('description', videoData.description)
        videoData.hashtags.forEach((item, idx) => {
            formData.append(`hashtags[${idx}]`, item)
        })
        formData.append('videoUrl', videoUrl as Blob);
        const response = await fetch("http://localhost:4000/video/upload", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
            body: formData
        })
        const responseData = await response.json();

        console.log('responseData', responseData);
    }
    return (
        <VideoUpload
            VideoSubmit={VideoUploadSubmit}
            VideoChange={VideoDataChange}
            DescriptionChange={DescriptionChange}
        />
    )
};

export default VideoUploadContainer;