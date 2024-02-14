import React from 'react';
import "./css/index.css";
import VideoListsContainer from '../../components/VideoLists/Container/VideoListsContainer';

const Home = () => {
    return (
        <main className='home-page'>
            <section className='home-section'>
                <VideoListsContainer />
            </section>
        </main>
    );
};

export default Home;