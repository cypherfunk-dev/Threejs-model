import { Environment, OrbitControls} from '@react-three/drei'
import { Model } from '../models/model1'

export const Homescene = () => {
    return (
<>

<OrbitControls/>
        <Environment preset='city'/>
        <ambientLight intensity={6}/>
		
		<group scale={[0.5, 0.5, 0.5]}>
        <Model/>
        </group>
</>
    )
}