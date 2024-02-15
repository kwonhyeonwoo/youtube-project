import React, { useEffect } from 'react';
import "./css/index.css";
import VideoListsContainer from '../../components/VideoLists/Container/VideoListsContainer';

const Home = () => {
    useEffect(() => {
        const fetchData = async () => {

            try {
                const token = localStorage.getItem('token')
                const response = await fetch('http://localhost:4000/profile', {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                const responseData = await response.json();
                console.log('responseDta', responseData);
            } catch (error) {
                console.log('server error', error)
            }
        }
        fetchData();
    }, [])
    return (
        <main className='home-page'>
            <section className='home-section'>
                <VideoListsContainer />
            </section>
        </main>
    );
};

export default Home;