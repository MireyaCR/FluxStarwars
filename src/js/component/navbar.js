import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export const Navbar = (props) => {

	return (
		<nav className="navbar navbar-light bg-light sticky-sm-top">
			<Link to="/">
				<span className="navbar-brand m-3 h1">
					<img src="https://cdn.goodvinilos.com/61003/vinilo-logo-star-wars.jpg" alt="StarWars" width="100" height="100"/>
				</span>
			</Link>
			<div className="dropdown-sm m-3">
				<button onClick={() => {
					<div className="dropdown-menu">
					{props.favorites.map((element,index)=>{ 
						return(                       
                         		<a key={index} className="dropdown-item" href="#"><p>{element.name}</p><button>"p"</button></a> 
						)
					})}
				</div>				
				}}
				className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Favorite<span className="badge badge-light">{props.favorites.lenght}</span></button>
				
			</div>
		</nav>		
	);
};

Navbar.propTypes={
	favorite:propTypes.object,
};


