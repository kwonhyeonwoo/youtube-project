import React, { useEffect, useState } from 'react';
import { AuthData } from '../../store/authSlice';
import "./css/index.css";
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

type Props = {
    data: AuthData | null;
    error: string | null;
    loading: boolean;
}
const Profile = ({
    data,
    error,
    loading
}: Props) => {
    const [ellipsisClick, setEllipsisClick] = useState(null);
    const EllipsisClick = (id: any) => setEllipsisClick(prev => prev === id ? null : id);
    const params = useParams();
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4000/video/views', {
                method: "GET"
            });
            const responseData = await response.json()
            console.log('best views', responseData);
        }
        fetchData();
    }, [])
    return (
        <main className='profile-page'>
            <section className='profile-section'>
                <div className='user-profile-wrapper'>
                    <img className='user-avatar' src={`http://localhost:4000/${data?.avatar}`} alt="profile-img" />
                    <div className='user-info'>
                        <div className='user-name'>{data?.name}</div>
                        <div className='user-nickname'>@{data?.nickName}</div>
                        <div className='info-edit-link'><Link to={`/${data?._id}/profile/edit`}>정보수정 &rarr;</Link></div>
                    </div>
                </div>

                <div className='user-videos-wrapper'>
                    <h2 className='videos-title'>내 비디오</h2>
                    <div className='videos-wrapper'>
                        {data?.videos && data?.videos?.length > 0 ? data?.videos?.map((item, idx) => (
                            <div className='video-container' key={idx}>
                                <video className='video' src={`http://localhost:4000/${item.videoUrl}`} />
                                <div className='video-info'>
                                    <div className='container'>
                                        <div className='video-title'>{item.title}</div>
                                        {data?._id === params.id && <FontAwesomeIcon onClick={() => EllipsisClick(item._id || idx)} className='ellipsis-svg' icon={faEllipsis} />}
                                    </div>
                                    {ellipsisClick === (item._id || idx) &&
                                        <div className='ellipsis-wrapper'>
                                            <div className='video-delete'>삭제</div>
                                            <div className='video-edit'>
                                                <Link to={`/videos/${item._id}/edit`}>수정</Link>
                                            </div>
                                            <div className='video-shared'>공유</div>
                                        </div>}
                                    <div className='video-views'>조회수 {item.meta.views}회</div>
                                    <div className='video-datetime'>{item.dateTime}</div>
                                </div>
                            </div>
                        )) :
                            <div className='no-video'>등록 된 비디오가 없습니다</div>

                        }

                    </div>
                </div>
            </section>
        </main>
    );
};

export default Profile;