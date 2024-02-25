import { useNavigate } from "react-router-dom";
import { VideosData } from "../../store/videosSlice";
import "./css/index.css";
type Props = {
    videos: VideosData[] | null;
}
const VideoLists = ({ videos }: Props) => {
    const navigate = useNavigate();
    return (
        <div className="video-lists-wrapper">
            <div className="video-detail-wrapper">
                {videos?.map((item, idx) => (
                    <div className="detail-box" key={idx} onClick={() => navigate(`/video/${item._id}`, { state: { value: item } })}>
                        <video className="video" src={`http://localhost:4000/${item.videoUrl}`} />
                        <div className="content-wrapper">
                            <div className="profile-wrapper">
                                <img className="profile-avatar" src={`http://localhost:4000/${item.owner.avatar}`} />
                                <div className="meta-wrapper">
                                    <div className="title">{item.title}</div>
                                    <div className="video-view">
                                        <div>조회수 {item.meta.views}회</div>
                                        <div> { }일전</div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="source">{ }</div> */}
                            <div >
                                {/* 조회수, 날짜데이터 작업해야함 */}

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};
export default VideoLists;