import React from 'react';
import "./css/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Auth } from '../../config/interface';
import { AuthData } from '../../store/authSlice';
import { Link } from 'react-router-dom';

type Props ={
    data: Auth | null;
}
const Header = ({data}:Props) => {
    return (
        <header className='header'>
            <div className='wrapper'>
                <div className='logo-wrapper'>
                    <FontAwesomeIcon className='menu-svg' icon={faBars} />
                    <div className='logo'>
                        <FontAwesomeIcon className='youtube-logo' icon={faYoutube} />
                        <div className='title'>YouTube</div>
                    </div>

                </div>
                <div className='search-wrapper'>
                    <input type="text" className='search-input' />
                    <FontAwesomeIcon className='glass-svg' icon={faMagnifyingGlass} />
                </div>
                <div className='profile-wrapper'>
                    <div className='user-nmae'>{data?.nickName}</div>
                    <div className='profile-avatar'>
                        {data?.avatar ? <img src={`http://localhost:4000/${data?.avatar}`} /> :
                            <Link to='/login'>
                                <button className='login-btn'>로그인</button>
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;