import { Route, Routes } from "react-router-dom";
import VideoUploadContainer from "../../pages/VideoUpload/Container/VideoUploadContainer";

const VideoRoutes = ()=>{
    return(
        <Routes>
            <Route path='/upload' element={<VideoUploadContainer/>}/>
        </Routes>
    )
};

export default VideoRoutes;