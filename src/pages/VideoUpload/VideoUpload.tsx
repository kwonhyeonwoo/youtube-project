import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

import "./css/index.css";
const VideoUpload = ()=>{
    return(
        <main className="video-upload-page">
            <section className="video-upload-section">
                <div className="video-upload-wrapper">
                    <div className="video-choice">
                        <div className="video">
                            <label htmlFor="video" className="upload-label">
                                <FontAwesomeIcon icon={faArrowUpFromBracket}  />
                            </label>

                        </div>
                        <input type="file" id="video" />
                    </div>
                    <div className="video-detail-wrapper">
                        <input className="video-title" type="text" name="title" placeholder='제목' minLength={5} max={15} required />
                        <textarea name="description"  maxLength={30} placeholder="내용" required className="video-description"/>
                        <input type="text"  name="hashtags" placeholder="해쉬태그" className="video-hashtags"/>
                        <button className="upload-button">비디오 업로드</button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default VideoUpload;