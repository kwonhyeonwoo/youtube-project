import { Route, Routes } from "react-router-dom";
import VideoUploadContainer from "../../pages/VideoUpload/Container/VideoUploadContainer";
import WatchVideoContainer from "../../pages/WatchVideo/container/WatchVideoContainer";

const VideoRoutes = () => {
    return (
        <Routes>
            <Route path='/upload' element={<VideoUploadContainer />} />
            <Route path='/:id' element={<WatchVideoContainer />} />
        </Routes>
    )
};

export default VideoRoutes;