import React, { useState,useRef } from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../Components/Loader'
import Island2 from "../models/Island2"
import Sky from '../models/Sky'
import Plane from '../models/Plane'
import HomeInfo from '../Components/HomeInfo'
{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
          popup
        </div> */}
const Home = () => {

  //-----------------------------------------------
  const stopPoints = [
     // Point 1
    0,            // Point 2
    Math.PI / 2,  // Point 3
    Math.PI,
    -Math.PI / 2,      // Point 4
  ];

  const islandRotationRef = useRef(0);
  const [showPopup, setShowPopup] = useState(null);

  // Function to update the current rotation of the island
  const updateIslandRotation = (rotation) => {
    islandRotationRef.current = rotation;

    // Check if the rotation matches one of the stop points
    const currentStop = stopPoints.find(
      (stop) => Math.abs(rotation - stop) < 0.1 // tolerance to match rotation
    );

    if (currentStop !== undefined) {
      setShowPopup(currentStop); // Display popup at this stop point
    }
    else {
      setShowPopup(null); // Hide popup if not at a stop point
    }
  };
  
 //-------------------------------------------------------------- 
// .....................................................................

  const [isRotating,setIsRotating] = useState(false);

  const adjustIslandForScreensize=()=>{
    let ScreenScale=null;
    let ScreenPosition=[2,-5,-40];
    let rotation=[-Math.PI/2.1,0,1];
    if(window.innerWidth<768)
    {
      ScreenScale=[0.2,0.2,0.2];
      
    }
    else
    {
      ScreenScale=[0.35,0.35,0.35];
    }
    return [ScreenScale,ScreenPosition,rotation]
  }
  const adjustPlaneForScreenSize=()=>{
    let ScreenScale,ScreenPosition;
    // let rotation=[-Math.PI/2.1,0,1];
    if(window.innerWidth<768)
    {
      ScreenScale=[1.5,1.5,1.5];
      ScreenPosition=[0,-1.5,0]
    }
    else
    {
      ScreenScale=[3,3,3];
      ScreenPosition=[0,-4,-4]
    }
    return [ScreenScale,ScreenPosition]
  }
  const [islandScale,islandPosition,islandRotation]=adjustIslandForScreensize();
  const [planeScale,planePosition]=adjustPlaneForScreenSize();
  return (
    <section className='w-full h-screen relative z-[2]' >
        <Canvas className={`w-full h-screen bg-transparent ${isRotating?'cursor-grabbing':'cursor-grab'} `} camera={{near:0.1,far:1000}}>
          <Suspense fallback={<Loader/>}>
          {/* shows loading screen when 3d model is loading */}
          <directionalLight position={[10,1,1]} intensity={1}/>
          <ambientLight intensity={0.6}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>

          {/* <Bird /> */}
          <Sky 
            isRotating={isRotating}
          />
          </Suspense>
          <Island2 
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            onRotationChange={updateIslandRotation}
          />
          <Plane
            isRotating={isRotating} 
            planeScale={planeScale}
            planePosition={planePosition}
            rotation={[0,20,0]}
          />
        </Canvas>

        {/* ............................. */}
        {showPopup !== null && (
          <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
            {/* Popup at Stop {stopPoints.indexOf(showPopup) + 1} */}
            <HomeInfo currentStage={stopPoints.indexOf(showPopup) + 1}/>
          </div>
        )}
        {/* <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4 z-20">
          <button className="p-2 bg-gray-800 text-white rounded" onClick={handlePrevious}>Previous</button>
          <button className="p-2 bg-gray-800 text-white rounded" onClick={handleNext}>Next</button>
        </div> */}
      {/* .......................................... */}
    </section>
  )
}

export default Home
