import React, { Fragment } from 'react';
import "./css/index.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faFilm, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthData } from '../../store/authSlice';
type Props = {
    data: AuthData | null;
}
const Sidebar = ({ data }: Props) => {
    const sidebarArr = [
        {
            svg: <div className='channel-wrapper'>
                <FontAwesomeIcon icon={faUser} />
            </div>,
            title: "내 채널",
            link: "/chanel",
        },
        {
            svg: <FontAwesomeIcon icon={faHeart} />,
            title: "인기순 동영상",
            link: "/video/best",
        },
        {
            svg: <FontAwesomeIcon icon={faFilm} />,
            title: "내 동영상",
            link: `/${data?._id}/profile`,
        },
        {
            svg: <FontAwesomeIcon icon={faFilm} />,
            title: "영상 업로드",
            link: "/video/upload",
        },
    ]
    return (
        <div className='sidebar-wrapper'>
            <div className='container'>
                <div className='sidebar-menu-wrapper'>
                    <div className='menu-wrapper'>
                        <div className='title'>나 {">"}</div>
                        <ul className='menu-lists'>
                            {sidebarArr.map((item, idx) => (
                                <li className='menu-list' key={idx}>
                                    {item.svg}
                                    <Link to={item.link}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='menu-wrapper'>
                        <div className='title'>구독 {">"}</div>
                        <ul className='menu-lists'>
                            {subscribeArr.map((item, idx) => (
                                <li className='menu-list' key={idx}>
                                    {item.svg}
                                    <Link to={item.link}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;



// 임시 데이터
const subscribeArr = [
    {
        svg: <div className='subscribe-profile' />,
        title: "아요커플",
        link: "",
    },
    {
        svg: <div className='subscribe-profile' />,
        title: "밀덕 케이쌍",
        link: "/",
    },
    {
        svg: <div className='subscribe-profile' />,
        title: "푸들커플",
        link: "",
    },
    {
        svg: <div className='subscribe-profile' />,
        title: "1급 비밀",
        link: "",
    },
    {
        svg: <div className='subscribe-profile' />,
        title: "생활코딩",
        link: "",
    },

]







