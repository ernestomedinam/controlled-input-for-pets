import React from "react";
import PropTypes from "prop-types";

export const Card = ({ pet, ...props }) => {
	return (
		<div className="card col-4" style={{ width: "18rem" }}>
			<img src={pet.image} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{pet.name}</h5>
				<p className="card-text">{`${pet.mainColor} ${pet.specie}, ${pet.age} años de edad.`}</p>
				<a href="#" className="btn btn-primary">
					{"Adopta esta mascota!"}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	pet: PropTypes.object,
};
