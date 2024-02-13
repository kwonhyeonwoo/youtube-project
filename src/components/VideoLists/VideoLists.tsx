import { Video } from "../../config/interface";
import "./css/index.css";
type Props={
    data:Video[];
}
const VideoLists = ({data}:Props) =>{
    return(
        <div className="video-lists-wrapper">
            <div className="video-detail-wrapper">
                {data.map((item,idx)=>(
                    <div className="detail-box" key={idx}>
                        <div className="video" />
                        <div className="content-wrapper">
                            <div className="profile-wrapper">
                                <div className="profile-avatar"/>
                                <div className="title">{item.title}</div>
                            </div>
                            <div className="source">{item.source}</div>
                            <div className="meta-wrapper">
                                <div>조회수 {item.meta.view}회</div>
                                <div> {item.meta.day}일 전</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};
export default VideoLists;