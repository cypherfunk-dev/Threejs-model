import '@/styles/index.css'
import { Canvas } from '@react-three/fiber'
import { Homescene } from '@/scenes/homescene'

export const App = () => {
  return (
    <>
      <div className="app">
        Testing
      </div>
      <Canvas className='canvas' shadows camera={{position:[0,30,1000], fov:15}}>
      <Homescene/>
      </Canvas>
    </>
  )
}

export default App
