import '@/styles/index.css'
import { Canvas } from '@react-three/fiber'
import { Homescene } from '@/scenes/homescene'
import { EffectComposer, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from 'postprocessing'

function Effects() {
  return (
    <EffectComposer>
  <ChromaticAberration
    blendFunction={BlendFunction.NORMAL} // blend mode
    offset={[0.008, 0.007]} // color offset
  />
    </EffectComposer>
  );
}

export const App = () => {
  return (
    <>
      <div className="app">
        Testing
      </div>
      <Canvas className='canvas' shadows camera={{position:[0,30,60], fov:15}}>
      <color  />

      <Homescene/>
      <Effects/>
      </Canvas>
    </>
  )
}

export default App
