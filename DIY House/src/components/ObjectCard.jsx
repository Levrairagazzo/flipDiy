import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import ModelViewer from "./ModelViewer";
import  blackHeart from "../assets/heart.svg?component";
import  redHeart from "../assets/heart_red.svg?component";
import flipIcon from "../assets/flip-horizontal.svg?component";

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
                <h1>{objectName}</h1>
                <img src={flipIcon} alt='flip_icon'  width="50" height="50" onClick={handleFlip}/>
                <img src={heartIcon} alt='heart_icon' width="50" height="50" onClick={handleLike}/>
                <a className="cc" href="https://creativecommons.org/licenses/by/2.0/" target="_blank">
                    <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"  width="25" height="25"/>
                    <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg"  width="25" height="25"/>
                </a>

            </section>
            
       </div>
        <div className='card backCard'>
            <p className="details" onClick={handleDoubleTap}>Description of the object, and the details of it's impact.</p>
            <section className="attribution">
                    <h1>{objectName}</h1>
                    <img src={flipIcon} alt='flip_icon'  width="50" height="50" onClick={handleFlip}/>
                    <img src={heartIcon} alt='heart_icon' width="50" height="50"/>
                    <a className="cc" href="https://creativecommons.org/licenses/by/2.0/" target="_blank">
                        <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"  width="25" height="25"/>
                        <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg"  width="25" height="25"/>
                    </a>

            </section>
                
       </div>
            
        </ReactCardFlip>
    )
}