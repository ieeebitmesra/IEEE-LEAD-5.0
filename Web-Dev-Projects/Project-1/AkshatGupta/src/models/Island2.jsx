import { a } from "@react-spring/three";
import { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import islandScene from "../assets/3d/island2.glb";
import { Html } from "@react-three/drei";

const Island2 = ({ isRotating, setIsRotating,onRotationChange, ...props }) => {

  const stopPoints = [
    // Point 1
   0,            // Point 2
   Math.PI / 2,  // Point 3
   Math.PI,
   -Math.PI / 2,      // Point 4
 ];
  

  const islandRef = useRef();
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;
  const [currentStopIndex, setCurrentStopIndex] = useState(0);


  const goToStopPoint = (index) => {
    const targetRotation = stopPoints[index];
    islandRef.current.rotation.z = targetRotation;
    rotationSpeed.current = 0; // Stop the rotation
    setCurrentStopIndex(index);
  };

  const handleNext = () => {
    const nextIndex = (currentStopIndex + 1) % stopPoints.length;
    goToStopPoint(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = (currentStopIndex - 1 + stopPoints.length) % stopPoints.length;
    goToStopPoint(prevIndex);
  };

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    if (isRotating) {
      e.stopPropagation();
      e.preventDefault();

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;

      islandRef.current.rotation.z += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.z += 0.01 * Math.PI; // rotate along the z-axis when left arrow is pressed
    } else if (e.key === 'ArrowRight') {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.z -= 0.01 * Math.PI; // rotate along the z-axis when right arrow is pressed
    }
  };
  
  const handleKeyUp = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsRotating(false); // stop rotating when arrow key is released
    }
  };

  useFrame(() => {

    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
  
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      } else {
        islandRef.current.rotation.z += rotationSpeed.current; // Apply the rotation to z-axis
        
        // Check for stopping points
        const currentRotation = islandRef.current.rotation.z;
        const normalizedRotation = ((currentRotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  
        // Check if the current rotation is close to any of the stop points
        for (const stopPoint of stopPoints) {
          if (Math.abs(normalizedRotation - stopPoint) < 0.1) { // Adjust the tolerance as needed
            islandRef.current.rotation.z = stopPoint; // Snap to the stop point
            rotationSpeed.current = 0; // Stop further rotation
            break; // Exit the loop if a stop point is found
          }
        }
      }
    }
  });
  

  useEffect(() => {
    const canvas = gl.domElement;
    
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('touchstart',handlePointerDown,{passive:false});
    canvas.addEventListener('touchend',handlePointerUp,{passive:false});
    canvas.addEventListener('touchmove',handlePointerMove,{passive:false});
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
  
    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('touchstart',handleKeyDown);
      canvas.removeEventListener('touchend',handleKeyUp);
      canvas.removeEventListener('touchmove',handlePointerMove);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove, handleKeyDown, handleKeyUp]);
  

  useFrame(() => {
    if (islandRef.current) {
      const currentRotation = islandRef.current.rotation.z;
      onRotationChange(currentRotation); // Pass rotation to Home.jsx
    }
  });
  return (
    <>
    <a.group ref={islandRef} {...props}  dispose={null}>
      <mesh
        
        
        geometry={nodes.Clouds_Clouds_0.geometry}
        material={materials.Clouds}
        
      />
      <mesh
        
        
        geometry={nodes.hammock_hammock_0.geometry}
        material={materials.hammock}
        
      />
      <mesh
        
        
        geometry={nodes.Tequila_Bottle_Tequila_Bottle_0.geometry}
        material={materials.Tequila_Bottle}
        
      />
      <mesh
        
        
        geometry={nodes.skeleton_skeleton_0.geometry}
        material={materials.skeleton}
        
      />
      <mesh
        
        
        geometry={nodes.Pyramid_Pyramid_0.geometry}
        material={materials.Pyramid}
        
      />
      <mesh
        
        
        geometry={nodes.Island_Grass_Island_Grass_0.geometry}
        material={materials.Island_Grass}
        
      />
      <mesh
        
        
        geometry={nodes.shrubbery_shrubbery_0.geometry}
        material={materials.shrubbery}
        
      />
      <mesh
        
        
        geometry={nodes.Lava_bubble_Lava_bubble_0.geometry}
        material={materials.Lava_bubble}
        
      />
      <mesh
        
        
        geometry={nodes.Volcanic_lava_Volcanic_lava_0.geometry}
        material={materials.Volcanic_lava}
        
      />
      <mesh
        
        
        geometry={nodes.Palm_tree_2_Palm_tree_2_0.geometry}
        material={materials.Palm_tree_2}
        
      />
      <mesh
        
        
        geometry={nodes.Palm_tree_1_Palm_tree_1_0.geometry}
        material={materials.Palm_tree_1}
        
      />
      <mesh
        
        
        geometry={nodes.Volacano_Sand_Volacano_Sand_0.geometry}
        material={materials.Volacano_Sand}
       
      />
      <mesh
        
        
        geometry={nodes.Ocean_Ocean_0.geometry}
        material={materials.Ocean}
        
      />
      <mesh
        
        
        geometry={nodes.Volcano_Grass_Volcano_Grass_0.geometry}
        material={materials.Volcano_Grass}
        
      />
      <mesh
        
        
        geometry={nodes.Volcano_Base_Volcano_Base_0.geometry}
        material={materials.Volcano_Base}
        
      />
      {/* <Html>
      <div className="relative top-28 bottom-0 right-10 flex justify-center items-center space-x-4 z-20">
                <button className="p-2 bg-gray-800 text-white rounded relative top-16" >Previous</button>
                <button className="p-2 bg-gray-800 text-white rounded relative top-16 " onClick={handleNext} >Next</button>
              </div>

      </Html> */}
       {/* Arrow buttons for navigation */}
       
    </a.group>
    <Html className="flex items-center justify-center gap-x-3 mt-60 ">
          <button className="p-2  bg-gray-800 text-white rounded-xl" onClick={handleNext}>
            Next
          </button>
        
      </Html>
    </>
    
  )
}
export default Island2;
