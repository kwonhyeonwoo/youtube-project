import { Route, Routes } from "react-router-dom";
import VideoUploadContainer from "../../pages/VideoUpload/Container/VideoUploadContainer";
import WatchVideoContainer from "../../pages/WatchVideo/container/WatchVideoContainer";
import BestVideosContainer from "../BestVideos/container/BestVideosContainer";

const VideoRoutes = () => {
    return (
        <Routes>
            <Route path='/upload' element={<VideoUploadContainer />} />
            <Route path='/:id' element={<WatchVideoContainer />} />
            <Route path='/best' element={<BestVideosContainer />} />
        </Routes>
    )
};

export default VideoRoutes;