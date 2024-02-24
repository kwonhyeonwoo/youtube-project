import { useSelector } from "react-redux";
import WatchVideo from "../WatchVideo"
import { RootState } from "../../../store";
import { useParams } from "react-router-dom";

const WatchVideoContainer = () => {
    const { data, loading, error } = useSelector((state: RootState) => state.getAuth);
    const params = useParams();
    console.log(params.id)
    const VideoViewSubmit = async () => {
        try {
            const response = await fetch(`http://localhost:4000/video/${params.id}/views`, {
                method: "POST",
            })
            console.log('data', response)
            const responseData = await response.json();
            console.log('response data', responseData)
        } catch (error) {
            console.log('internet error', error)
        }
    }
    return <WatchVideo
        data={data}
        loading={loading}
        VideoViewSubmit={VideoViewSubmit}
    />
}

export default WatchVideoContainer;