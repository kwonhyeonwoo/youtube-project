import React from 'react';
import { VideosData } from '../../store/videosSlice';
import "./css/index.css";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons';

type Props = {
    videos: VideosData[] | null;
}
const BestVideos = ({ videos }: Props) => {
    const navigate = useNavigate();
    const copyToClipboard = (id: string) => {
        const pageUrl = `/video/${id}`
        navigator.clipboard.writeText(pageUrl).then(() => {
            alert(`${pageUrl} 복사되었습니다 !`)
        }).catch(err => {
            // 복사 실패 시, 에러 처리
            console.error('Failed to copy URL: ', err);
        });
    };

    console.log('videos', videos)
    return (
        <main className='best-videos-page'>
            <section className='best-videos-section'>
                <div className='videos-wrapper'>
                    {
                        videos?.map((item, idx) => (
                            <div className='video-container' key={idx} onClick={() => navigate(`/video/${item._id}}`, { state: { value: item } })}>
                                <video src={`http://localhost:4000/${item.videoUrl}`} className='video' />
                                <div className='video-info'>
                                    <div className='owner-wrapper'>
                                        <div className='owner-container'>
                                            <img className='owner-avatar' src={`http://localhost:4000/${item.owner.avatar}`} alt="owner-avatar" />
                                            <div className='owner-nickname'>{item.owner.nickName}</div>
                                            <div className='detail-views'>{`조회수 ${item.meta.views}회`}</div>
                                        </div>
                                        <div className='video-shared'>
                                            <FontAwesomeIcon onClick={() => copyToClipboard(item._id)} icon={faShareFromSquare} />
                                        </div>
                                    </div>
                                    <div className='video-detail-box'>
                                        <div className='detail-title'>{item.title}</div>
                                        <div className='detail-description'>{item.description}</div>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </main>
    );
};

export default BestVideos;