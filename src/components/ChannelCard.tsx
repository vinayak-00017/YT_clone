import { useNavigate } from "react-router-dom";


export function ChannelCard(props : any){

    const navigate = useNavigate();

    return <div 
    className="p-3 cursor-pointer flex-wrap justify-center"
    // onClick={()=>navigate(`/watch/${props.videoId}`)}
    >        
            <img src={props.image} className="h-80 rounded-full"/>     
            <div className="flex justify-center mt-4">       
                     {props.title}                
            </div>
    </div>
}
