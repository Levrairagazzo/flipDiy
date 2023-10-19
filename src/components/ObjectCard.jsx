import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import ModelViewer from "./ModelViewer";
import  blackHeart from "../assets/heart.svg?component";
import  redHeart from "../assets/heart_red.svg?component";
import flipIcon from "../assets/flip-horizontal.svg?component";
import instagramLogo from "../assets/instagram_logo.svg?component";
import twitterLogo from "../assets/twitter_logo.svg?component"
import details from "../detailsDB";

export default function ObjectCard ({glbFile, objectName}) {
    const [flip, setFlip] = useState(false);
    const [heartIcon, setHeartIcon] = useState(blackHeart)

    const handleFlip = (e) => {
            e.preventDefault();
            setFlip(!flip);
        }
    const handleLike = () => {
        if(heartIcon === redHeart)
            setHeartIcon(blackHeart)
        else
            setHeartIcon(redHeart)
        }

    const handleDoubleTap = () => {
        if(event.detail === 2)handleLike();
    }

    return (
        <ReactCardFlip isFlipped={flip} flipDirection = "horizontal">
        <div className='card frontCard'>
           <div onClick={handleDoubleTap}>
                <ModelViewer name={objectName} glbAddress={glbFile} />
           </div>
           <section className="attribution">
                    <div>
                        <h1>{objectName}</h1>
                    </div>
                    <div>     
                        <img src={flipIcon} alt='flip_icon'  width="50" height="50" onClick={handleFlip}/>
                        <img src={heartIcon} alt='heart_icon' width="50" height="50" onClick={handleLike}/>
                    </div>
                    <div>
                        <img src={twitterLogo} alt='twitter_logo' width="50" height="50"/>
                        <img src={instagramLogo} alt='instagram_logo' width="50" height="50"/>
                    </div>    
            </section>
            
       </div>
        <div className='card backCard'>
            {details}
            <section className="attribution">
                    <div>
                        <h1>{objectName}</h1>
                    </div>
                    <div>     
                        <img src={flipIcon} alt='flip_icon'  width="50" height="50" onClick={handleFlip}/>
                        <img src={heartIcon} alt='heart_icon' width="50" height="50" onClick={handleLike}/>
                    </div>
                    <div>
                        <img src={twitterLogo} alt='twitter_logo' width="50" height="50"/>
                        <img src={instagramLogo} alt='instagram_logo' width="50" height="50"/>
                    </div>
                  
                    
            </section>
                
       </div>
            
        </ReactCardFlip>
    )
}