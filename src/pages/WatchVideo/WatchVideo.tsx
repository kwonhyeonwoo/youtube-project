import React, { useEffect, useRef, useState } from "react";
import { AuthData } from "../../store/authSlice";
import { Link, useLocation, useParams } from "react-router-dom";
import "./css/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faExpand, faVolumeLow, faPause, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';


type Props = {
    data: AuthData | null;
    loading: boolean;
    VideoViewSubmit: () => void;
}
type VideoPlay = {
    volumn: boolean,
    play: boolean;
    screen: boolean;
}
const WatchVideo = ({ VideoViewSubmit
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
    const videoContainerRef = useRef<HTMLDivElement>(null);
    const [videoPlaying, setVideoPlaying] = useState<VideoPlay>({
        volumn: false,
        play: false,
        screen: false
    });
    const [videoCurrentTime, setVideoCurrentTime] = useState<number | string>("00:00");
    const [videoTotalTime, setVideoTotalTime] = useState<number | string>(0)
    const [videoMaxTime, setVideoMaxTime] = useState<number>(0);
    const videoClickHandler = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                setVideoCurrentTime(videoRef.current?.currentTime);
                setVideoPlaying((state) => ({
                    ...state,
                    play: true
                }))
                videoRef.current.play();
            } else {
                setVideoPlaying((state) => ({
                    ...state,
                    play: false
                }))
                videoRef.current.pause();
            }
        }

    }
    const videoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const video = videoRef.current;
        if (video) {
            video.currentTime = Number(event.target.value);
            console.log('video timeline', video.currentTime)
        }
    }
    const FullScreenClick = () => {
        const container = videoContainerRef.current;
        if (container) {
            // 현재 풀스크린 상태인지 확인
            if (!document.fullscreenElement) {
                // 풀스크린 모드가 아니라면, 풀스크린 요청
                container.requestFullscreen().then(() => {
                    setVideoPlaying((state) => ({
                        ...state,
                        screen: true // 풀스크린 상태 업데이트
                    }));
                }).catch(err => {
                    console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
                });
            } else {
                // 이미 풀스크린 모드라면, 풀스크린 해제
                document.exitFullscreen().then(() => {
                    setVideoPlaying((state) => ({
                        ...state,
                        screen: false // 일반 화면 상태로 업데이트
                    }));
                }).catch(err => {
                    console.error(`Error attempting to disable full-screen mode: ${err.message} (${err.name})`);
                });
            }
        }
    };

    const ExitFullscreen = () => {
        document.exitFullscreen();
    }
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.addEventListener('timeupdate', () => {
                const timeDate = (time: number) => new Date(Math.floor(time) * 1000).toISOString().substring(14, 19);
                setVideoCurrentTime(timeDate(video.currentTime));
            });
            video.addEventListener('loadedmetadata', () => {
                const timeDate = (time: number) => new Date(Math.floor(time) * 1000).toISOString().substring(14, 19);
                setVideoMaxTime(Math.floor(video.duration))
                setVideoTotalTime(timeDate(video.duration))
            })
        }
    }, []);
    const videoMutedClick = () => {
        if (videoRef.current && rangeRef.current) {
            if (!videoRef.current.muted) {
                videoRef.current.muted = true;
                setVideoPlaying((state) => ({
                    ...state,
                    volumn: false
                }))
                rangeRef.current.max = '0'

            } else {
                videoRef.current.muted = false
                rangeRef.current.min = '0'
                setVideoPlaying((state) => ({
                    ...state,
                    volumn: true
                }))

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
                    <div className="video" ref={videoContainerRef}>
                        <video
                            ref={videoRef}
                            className={`video ${videoPlaying.screen && 'video-fullscreen'}`}
                            src={`http://localhost:4000/${videoUrl}`} />

                        <div className={`video-controller ${videoPlaying.screen && 'fullscreen-controller'}`}>
                            <button
                                className="video-play-btn"
                                onClick={videoClickHandler}
                            >
                                {videoPlaying.play ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} onClick={VideoViewSubmit} />}

                            </button>
                            <button className="video-mute" onClick={videoMutedClick}>
                                {videoPlaying.volumn ? <FontAwesomeIcon icon={faVolumeXmark} /> : <FontAwesomeIcon icon={faVolumeLow} />}
                            </button>
                            <input ref={rangeRef} onChange={videoVolumnChange} type="range" step={0.1} min={0} max={1} className="range" />
                            <input type="range" className="video-timeline" onChange={videoChange} step={1} value={videoRef.current?.currentTime} min={0} max={videoMaxTime} />
                            <button className="screen-btn" onClick={FullScreenClick}>
                                <FontAwesomeIcon style={{ backgroundColor: 'transparent' }} icon={faExpand} />
                            </button>

                            <div className="screen-btn-wrapper">
                            </div>
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
                        <div className="video-time">
                            <div className="current-time">{videoCurrentTime}</div>
                            <div className="total-time">  / {videoTotalTime}</div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
};

export default WatchVideo;