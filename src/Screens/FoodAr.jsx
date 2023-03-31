import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Model from '../Models/Scene';
import { Suspense } from "react";

const FoodAr =()=>{
    return (
        <div className=" w-[100vw] h-[100vh] flex justify-center items-center">
            <Canvas camera={ { fov: 90}}>
                    <ambientLight intensity={1.25}/>
                    <Suspense fallback={null}>
                        <Model/>
                    </Suspense>
                    <Environment preset="sunset"/>
                    <OrbitControls/>
            </Canvas>
        </div>
    )
}
export default FoodAr; 