import { useDispatch, useSelector } from "react-redux"
import { Video } from "../../../config/interface"
import VideoLists from "../VideoLists"
import { AppDispatch, RootState } from "../../../store"
import { useEffect } from "react"
import { videosData } from "../../../store/videosSlice"
type Props = {

}
const VideoListsContainer = ({ }: Props) => {
    const dispatch: AppDispatch = useDispatch();
    const { data, error, loading } = useSelector((state: RootState) => state.getVideos);
    useEffect(() => {
        dispatch(videosData());
    }, [dispatch]);
    return (
        <VideoLists videos={data} />
    )
}

export default VideoListsContainer