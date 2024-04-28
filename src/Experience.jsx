import { OrbitControls } from "@react-three/drei"
import World from "./world/World"

const Experience = () => {
	return (
		<>
			<ambientLight />
			<OrbitControls makeDefault />
			<World />
		</>
	)
}

export default Experience
