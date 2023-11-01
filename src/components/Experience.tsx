import { OrbitControls } from '@react-three/drei'
import { Floor } from './Floor'

const Experience = () => {
  return (
      <>
          <ambientLight intensity={1}/>
          <OrbitControls/>
          <Floor/>
    </>
  )
}

export default Experience