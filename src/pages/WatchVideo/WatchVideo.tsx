import React, { useEffect, useRef, useState } from "react";
import { AuthData } from "../../store/authSlice";
import { Link, useLocation, useParams } from "react-router-dom";
import "./css/index.css";


type Props = {
    data: AuthData | null;
    loading: boolean;
}
const WatchVideo = ({
}: Props) => {
    const {
        state: {
            value: {
                videoUrl,
                title,
                hashtags,
                description,
                meta: {
                    views
                },
                owner: {
                    nickName,
                    _id,
                    avatar
                }
            }
        }
    } = useLocation();

    const videoRef = useRef<HTMLVideoElement>(null);
    const rangeRef = useRef<HTMLInputElement>(null);
    const [videoCurrentTime, setVideoCurrentTime] = useState<number | null>(null);
    const [videoBtn, setVideoBtn] = useState<string>('play');
    const videoTotalTime = Math.floor(videoRef.current?.duration ?? 0)
    const formatTime = (time: any) => new Date(time * 1000).toISOString().substring(11, 19);

    const videoClickHandler = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                setVideoBtn('stop')
                setVideoCurrentTime(videoRef.current?.currentTime);
                console.log('current', videoCurrentTime)
                videoRef.current.play();
            } else {
                setVideoBtn('play')

                videoRef.current.pause();
            }
        }

    }
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.addEventListener('timeupdate', () => {
                setVideoCurrentTime(Math.floor(videoRef.current?.currentTime ?? 0))
            });
        }
    }, []);
    const videoMutedClick = () => {
        if (videoRef.current && rangeRef.current) {
            if (!videoRef.current.muted) {
                videoRef.current.muted = true
                rangeRef.current.max = '0'

            } else {
                videoRef.current.muted = false
                rangeRef.current.min = '0'

            }
        }
    }

    const videoVolumnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('volumne', event.target.value);
    }
    return (
        <main className="watch-video-page">
            <section className="watch-video-section">
                <div className="video-wrapper">
                    <div className="video">
                        <video controls muted ref={videoRef} src={`http://localhost:4000/${videoUrl}`} />
                        <div className="video-controller">
                            <button className="video-play"
                                onClick={videoClickHandler}
                            >
                                {videoBtn}
                            </button>
                            <button className="video-mute" onClick={videoMutedClick}>mute</button>
                            <input ref={rangeRef} onChange={videoVolumnChange} type="range" step={0.1} min={0} max={1} className="range" />
                        </div>
                    </div>
                    <Link to={`/auth/${_id}`} className="video-owner">
                        <img src={`http://localhost:4000/${avatar}`} alt="owner-avatar" />
                        <div className="owner-nickname">{nickName}</div>
                    </Link>
                    <div className="video-info">
                        <div className="title">{title}</div>
                        <div className="video-time">
                            <div className="current-time">current: {formatTime(videoCurrentTime)}</div>
                            <div className="total-time">duration: {formatTime(videoTotalTime)}</div>
                        </div>
                        <div className="video-description">{description}</div>
                        <div className="video-hashtags">{hashtags}</div>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default WatchVideo;