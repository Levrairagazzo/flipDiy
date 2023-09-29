import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import ModelViewer from "./ModelViewer";

export default function Sample ({glbFile, objectName}) {
    const [flip, setFlip] = useState(false);

   const handleClick = (e) => {
        e.preventDefault();
        setFlip(!flip);
    }

    return (
        <ReactCardFlip isFlipped={flip} flipDirection = "horizontal">
        <div className='card'>
            <ModelViewer name={objectName} glbAddress={glbFile}/>
            <button onClick={handleClick}>More Infos</button>
       </div>
        <div className='card'>
            <section className="attribution">
                <span>
                    <h1>{objectName}</h1>
                </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolore officia aperiam repudiandae, tempore dolores, eius mollitia magnam animi saepe modi aut. Autem, voluptas suscipit laudantium facere magni fuga omnis?</p>
                <button onClick={handleClick}>More Infos</button>
            </section>
                
       </div>
            
        </ReactCardFlip>
    )
}