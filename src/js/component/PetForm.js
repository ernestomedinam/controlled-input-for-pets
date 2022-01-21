import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const PetForm = (props) => {
	// const [petName, setPetName] = useState("");
	// const [specie, setSpecie] = useState("");
	// const [legs, setLegs] = useState("");
	// const [mainColor, setMainColor] = useState("");
	// const [age, setAge] = useState("");
	// const [image, setImage] = useState("");
	const [count, setCount] = useState(0);
	const [pet, setPet] = useState({
		petName: "",
		specie: "",
		legs: "",
		mainColor: "",
		age: "",
		image: "",
	});
	useEffect(() => {
		setCount((previousCount) => previousCount + 1);
	}, []);
	return (
		<div className="d-flex flex-column w-100 justify-content-center">
			<input
				className="form-control my-2"
				type={"text"}
				placeholder="nombre"
				value={pet.petName}
				onChange={(e) => {
					setPet({
						// spread -> ...variable
						...pet,
						petName: e.target.value,
					});
					// setPetName(e.target.value);
				}}
			/>
			<select
				className="form-select my-2"
				value={pet.specie}
				onChange={(e) => {
					setPet((previousPet) => {
						return {
							...previousPet,
							specie: e.target.value,
							legs:
								e.target.value === "fish"
									? ""
									: previousPet.legs,
						};
					});

					// setSpecie(e.target.value);
					// if (e.target.value === "fish") {
					// 	setLegs("");
					// }
				}}>
				<option value="">{"Escoja una opción"}</option>
				<option value="cat">{"gato"}</option>
				<option value="dog">{"perro"}</option>
				<option value="bovine">{"bovino"}</option>
				<option value="fish">{"pez"}</option>
				<option value="bird">{"ave"}</option>
			</select>
			{pet.specie !== "fish" && ( // (condition) ? if : else ------- (condition) && if
				<input
					className="form-control my-2"
					type={"number"}
					value={pet.legs}
					onChange={(e) =>
						setPet((prev) => ({
							...prev,
							legs: e.target.value,
						}))
					}
					placeholder="patas"
				/>
			)}
			{/* <input
				className="form-control my-2"
				type={"text"}
				placeholder="especie"
				value={specie}
				onChange={(e) => {
					setSpecie(e.target.value);
				}}
			/> */}
			<input
				className="form-control my-2"
				type={"text"}
				placeholder="color principal"
				value={pet.mainColor}
				onChange={(e) => {
					setPet((prev) => ({
						...prev,
						mainColor: e.target.value,
					}));
				}}
			/>
			<input
				className="form-control my-2"
				type={"text"}
				placeholder="edad"
				value={pet.age}
				onKeyPress={(e) => {
					if (e.key.search(/[0-9]/) === -1) {
						console.log(e.key);
						e.preventDefault();
						e.stopPropagation();
						return;
					}
				}}
				onChange={(e) => {
					console.log(e.target.value);
					setPet((prev) => ({
						...prev,
						age: e.target.value,
					}));
				}}
			/>
			<input
				className="form-control my-2"
				type={"text"}
				placeholder="url de la imagen"
				value={pet.image}
				onChange={(e) => {
					setPet((prev) => ({
						...prev,
						image: e.target.value,
					}));
				}}
			/>
			{/* <input
				className="form-control my-2"
				type={"file"}
				accept={[".png", ".jpg"]}
			/> */}
			<button
				className="btn btn-success my-3"
				onClick={(e) => {
					props.handleCreatePet((previousPets) => [
						...previousPets,
						{
							...pet,
							name: pet.petName,
						},
					]);
					setPet({
						petName: "",
						specie: "",
						legs: "",
						age: "",
						image: "",
						mainColor: "",
					});
				}}>
				{"Crear mascota"}
			</button>
		</div>
	);
};

PetForm.propTypes = {
	handleCreatePet: PropTypes.func,
};
