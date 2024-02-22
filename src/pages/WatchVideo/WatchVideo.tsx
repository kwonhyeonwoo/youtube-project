import React, { useRef, useState } from "react";
import { AuthData } from "../../store/authSlice";
import { Link, useLocation, useParams } from "react-router-dom";
import "./css/index.css";


type Props ={
    data:AuthData | null;
    loading: boolean;
}
const WatchVideo = ({
}:Props)=>{
    const {
        state:{
            value:{
                videoUrl,
                title,
                hashtags,
                description,
                meta:{
                    views
                },
                owner:{
                    nickName,
                    _id,
                    avatar
                }
            }
        }
    } = useLocation();
    const videoRef = useRef<HTMLVideoElement>(null);
    const rangeRef = useRef<HTMLInputElement>(null);
    const [videoBtn, setVideoBtn] = useState<string>('play')
    const videoClickHandler = ()=>{
        if (videoRef.current) {
            if (videoRef.current.paused) {
                setVideoBtn('stop')
                videoRef.current.play();
            } else {
                setVideoBtn('play')

                videoRef.current.pause();
            }
        }

    }
    const videoMutedClick = ()=>{
        if(videoRef.current && rangeRef.current){
            if(!videoRef.current.muted){
                videoRef.current.muted = true
                rangeRef.current.max = '0'

            }else{
                videoRef.current.muted = false
                rangeRef.current.min = '0'

            }
        }
    }
    return (
        <main className="watch-video-page">
            <section className="watch-video-section">  
                <div className="video-wrapper">
                    <div className="video">
                        <video controls muted ref={videoRef} src={`http://localhost:4000/${videoUrl}`}/>
                        <div className="video-controller">
                            <button className="video-play"
                                onClick={videoClickHandler}
                            >
                                {videoBtn}
                            </button>
                            <button className="video-mute" onClick={videoMutedClick}>mute</button>
                            <input ref={rangeRef} type="range" step={0.1} min={0} max={1} className="range" />
                        </div>
                    </div>
                    <Link to={`/auth/${_id}`} className="video-owner">
                        <img src={`http://localhost:4000/${avatar}`} alt="owner-avatar" />
                        <div className="owner-nickname">{nickName}</div>
                    </Link>
                    <div className="video-info">
                        <div className="title">{title}</div>
                        <div className="video-description">{description}</div>
                        <div className="video-hashtags">{hashtags}</div>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default WatchVideo;