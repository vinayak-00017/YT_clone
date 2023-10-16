import { useParams } from "react-router-dom"
import { VideoPlayer } from "./VideoPlayer"
import { VideoGrid } from "./VideoGrid"

export const Watch = () => {

    const {videoId} = useParams<{videoId : string}>()
    if(videoId){
        return <div className="grid grid-cols-5">
            <div className="col-span-3">
                <VideoPlayer videoId={videoId}/>
            </div>     
            <div className="col-span-2">
                <div style={{
                    display : "flex",
                }}>
               
                </div>
               
            </div>
         </div>
    }
    
}