import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light sticky-sm-top">
			<Link to="/">
				<span className="navbar-brand m-3 h1">
					<img src="https://cdn.goodvinilos.com/61003/vinilo-logo-star-wars.jpg" alt="StarWars" width="100" height="100"/>
				</span>
			</Link>
			<div className="ml-auto m-3">
				<Link to="">
					<button className="btn-sm btn-primary">Favorites</button>
					{/* cuando se pulsa el boton , desplegar todos los elementos de favoritos */}
				</Link>
			</div>
		</nav>
		
	);
};




