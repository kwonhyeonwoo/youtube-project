import { useSelector } from "react-redux";
import WatchVideo from "../WatchVideo"
import { RootState } from "../../../store";
import { useParams } from "react-router-dom";

const WatchVideoContainer = () => {
    const { data, loading, error } = useSelector((state: RootState) => state.getAuth);

    return <WatchVideo
        data={data}
        loading={loading}
    />
}

export default WatchVideoContainer;