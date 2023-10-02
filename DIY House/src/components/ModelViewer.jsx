import {useState, useRef} from 'react';

export default function ModelViewer({name, glbAddress}){
  
  const [liked, setLiked] = useState(true);
  const modelRef = useRef();

  const doubleTapHandler = () => {
    if(event.detail == 2){
			setLiked(!liked)
		}
  }

  const singleTapHandler = () => {
    setLiked(!liked)
  }

  const switchColor = (event) => {
    const colorString = event.target.getAttribute('data-color');

    const model = modelRef.current;
    if (model) {
      const materials = model.model.materials;
      if (materials.length > 0) {
        const material = materials[0];
        material.pbrMetallicRoughness.setBaseColorFactor(colorString);
      }
    }
  };

  
  

  
  return (
    <>
      <main>
        <model-viewer
          onClick={doubleTapHandler} 
          ref={modelRef}
          src= {glbAddress}
          poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
          alt="Reuse Milk Bottle"
          shadow-intensity="1"
          camera-controls
          auto-rotate ar
          >
          <div className="controls" id="color-controls">
            <button data-color="#ff0000" onClick={switchColor}>Red</button>
            <button data-color="#00ff00" onClick={switchColor}>Green</button>
            <button data-color="#0000ff" onClick={switchColor}>Blue</button>
          </div>
          </model-viewer>
          <section className="attribution">
          <span>
          <h1>{name}</h1>
          </span>
          <a className="cc" href="https://creativecommons.org/licenses/by/2.0/" target="_blank">
            <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"/>
            <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg"/>
          </a>
          <div className='btnContainer'>
             {liked ? 
               <button 
                      onClick={singleTapHandler}
                      className="thumbUp" 
                      style={{backgroundColor: "red"}}
                      >{"\ud83d\udc4e"}</button> : 
                <button 
                      onClick={singleTapHandler}
                      className="thumbUp" 
                      style={{backgroundColor: "green"}} 
             >{"\ud83d\udc4d"}</button>
              }
          </div>
          </section>
    </main>
    </>
  )
}