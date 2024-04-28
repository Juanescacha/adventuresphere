import React from "react"
import { useGLTF } from "@react-three/drei"

const World = props => {
	const { nodes, materials } = useGLTF("/assets/models/nivel1.glb")
	return (
		<group
			{...props}
			dispose={null}>
			<mesh
				geometry={nodes.Gusano.geometry}
				material={materials.material}
			/>
			<mesh
				geometry={nodes.Dorado.geometry}
				material={materials.Golden_God}
			/>
			<mesh
				geometry={nodes.Bola.geometry}
				material={materials.material_0}
			/>
			<mesh
				geometry={nodes.Corazon.geometry}
				material={materials.None}
			/>
			<mesh
				geometry={nodes.Arana.geometry}
				material={materials["material.001"]}
			/>
			<mesh
				geometry={nodes.Cepillo_1.geometry}
				material={materials.Chomper}
			/>
			<mesh
				geometry={nodes.Cepillo_2.geometry}
				material={materials.Toothbrush}
			/>
			<mesh
				geometry={nodes.Isaac_1.geometry}
				material={materials["material_0.001"]}
			/>
			<mesh
				geometry={nodes.Isaac_2.geometry}
				material={materials.material_1}
			/>
			<mesh
				geometry={nodes.Cuchillos_1.geometry}
				material={materials.Material_6}
			/>
			<mesh
				geometry={nodes.Cuchillos_2.geometry}
				material={materials.Material_3}
			/>
			<mesh
				geometry={nodes.Cuchillos_3.geometry}
				material={materials.Material_7}
			/>
			<mesh
				geometry={nodes.Cuchillos_4.geometry}
				material={materials.Material_5}
			/>
			<mesh
				geometry={nodes.Cuchillos_5.geometry}
				material={materials.Material_4}
			/>
			<mesh
				geometry={nodes.Interior_1.geometry}
				material={materials.Letrero}
			/>
			<mesh
				geometry={nodes.Interior_2.geometry}
				material={materials.metal4}
			/>
			<mesh
				geometry={nodes.Interior_3.geometry}
				material={materials.ceiling0}
			/>
			<mesh
				geometry={nodes.Interior_4.geometry}
				material={materials.stucco0}
			/>
			<mesh
				geometry={nodes.Interior_5.geometry}
				material={materials.concrete0}
			/>
			<mesh
				geometry={nodes.Interior_6.geometry}
				material={materials.ceramics3}
			/>
		</group>
	)
}

useGLTF.preload("/assets/models/nivel1.glb")

export default World
