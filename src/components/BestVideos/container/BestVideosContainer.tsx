import React, { useEffect, useState } from 'react';
import BestVideos from '../BestVideos';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { VideosData, videosData } from '../../../store/videosSlice';

const BestVideosContainer = () => {
    const [bestVideos, setBestVideos] = useState<VideosData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4000/video/views', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const responseData = await response.json();
            setBestVideos(responseData);
        }
        fetchData();
    }, []);
    console.log('first')
    return <BestVideos videos={bestVideos} />
};

export default BestVideosContainer;