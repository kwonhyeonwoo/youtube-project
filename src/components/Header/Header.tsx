import React from 'react';
import "./css/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
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
                    <div className='user-nmae'>rnjsgusdn</div>
                    <div className='profile-avatar'>
                        <div className='avatar' />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;