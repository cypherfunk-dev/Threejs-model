import { Environment, OrbitControls, Stars} from '@react-three/drei'
import { Model } from '../models/model1'

export const Homescene = () => {
    return (
<>

<OrbitControls/>
        <Environment preset='city'/>
        <ambientLight intensity={6}/>
		
		<group scale={[20, 20, 20]}>
        <Model/>
        </group>
        <Stars/>
</>
    )
}