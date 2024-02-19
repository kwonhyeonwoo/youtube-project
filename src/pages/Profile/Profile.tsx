import React from 'react';
import { AuthData } from '../../store/authSlice';
import "./css/index.css";
import { Link } from 'react-router-dom';
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
    console.log('data', data)
    return (
        <main className='profile-page'>
            <section className='profile-section'>
                <div className='user-profile-wrapper'>
                    <img className='user-avatar' src={`http://localhost:4000/${data?.avatar}`} alt="profile-img" />
                    <div className='user-info'>
                        <div className='user-name'>{data?.name}</div>
                        <div className='user-nickname'>@{data?.nickName}</div>
                        <div className='info-edit-link'><Link to={`/auth/${data?._id}/edit`}>정보수정 &rarr;</Link></div>
                    </div>
                </div>

                <div className='user-videos-wrapper'>
                    <h2 className='videos-title'>내 비디오</h2>
                    <div className='videos-wrapper'>
                        {data?.videos?.map((item, idx) => (
                            <div className='video-container' key={idx}>
                                <video className='video' src={`http://localhost:4000/${item.videoUrl}`} />
                                <div className='video-info'>
                                    <div className='video-title'>{item.title}</div>
                                    <div className='video-views'>조회수 {item.meta.views}회</div>
                                    <div className='video-datetime'>{item.dateTime}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Profile;