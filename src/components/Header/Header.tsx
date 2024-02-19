import React from 'react';
import "./css/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { AuthData } from '../../store/authSlice';
import { Link } from 'react-router-dom';

type Props = {
    data: AuthData | null;

}
const Header = ({ data }: Props) => {
    return (
        <header className='header'>
            <div className='wrapper'>
                <div className='logo-wrapper'>
                    <div className='logo'>
                        <Link to={'/'}>
                            <FontAwesomeIcon className='youtube-logo' icon={faYoutube} />
                            <div className='title'>YouTube</div>
                        </Link>
                    </div>

                </div>
                <div className='search-wrapper'>
                    <input type="text" className='search-input' />
                    <FontAwesomeIcon className='glass-svg' icon={faMagnifyingGlass} />
                </div>
                <div className='profile-wrapper'>
                    <div className='user-nmae'>{data?.nickName}</div>
                    <div className='profile-avatar'>
                        {data?.avatar ? <Link to={`/${data._id}/profile`}>
                            <img src={`http://localhost:4000/${data?.avatar}`} />
                        </Link> :
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