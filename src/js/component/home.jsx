import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./Card";
import { PetForm } from "./PetForm";

//create your first component
const Home = () => {
	const [pets, setPets] = useState([
		{
			name: "Marla",
			specie: "cat",
			legs: 4,
			mainColor: "white",
			age: 3,
			image: "https://blog.ferplast.com/wp-content/uploads/2019/07/owning-a-white-cat-5b1b91a318ba9-1024x683.jpg",
		},
	]);
	return (
		<div className="w-100 container py-4">
			<div className="row w-100 mb-3 justify-content-center">
				<h1>{"Crea tu mascota!"}</h1>
			</div>
			<div className="row w-100 my-3 justify-content-center">
				<PetForm handleCreatePet={setPets} />
			</div>
			<div className="row flex-wrap mt-3 carousel">
				{pets.map((pet, index) => {
					return <Card key={index} pet={pet} />;
				})}
			</div>
		</div>
	);
};

export default Home;
