import React, { useEffect } from 'react';
import "./css/index.css";
import VideoListsContainer from '../../components/VideoLists/Container/VideoListsContainer';
type Props = {
}
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