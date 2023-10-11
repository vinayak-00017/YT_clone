
import YouTube from 'react-youtube';



export const VideoPlayer = ({videoId}: {videoId : string}) =>{
    const opts = {
        height : '720',
        width : '1280',
        playerVars : {
            autoplay : 0,
        }
    }

    return (<div>
        <YouTube videoId={videoId} opts={opts}/>
    </div>)
}

