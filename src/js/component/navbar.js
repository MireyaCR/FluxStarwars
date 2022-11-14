import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import {useContext,useEffect} from "react";

export const Navbar = () => {

	const { store,actions } = useContext(Context);  

	useEffect(()=>{
		actions.getFavorites()		    
	  })

	return (
		<nav className="navbar navbar-light bg-light sticky-sm-top">
			<Link to="/">
				<span className="navbar-brand m-3 h1">
					<img src="https://cdn.goodvinilos.com/61003/vinilo-logo-star-wars.jpg" alt="StarWars" width="100" height="100"/>
				</span>
			</Link>
			<div className="dropdown-sm m-3">
				<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Favorite<span className="badge badge-light">{store.favorites.lenght}</span></button>
				<div className="dropdown-menu">
					{store.favorites.map((element,index)=>{ 
						return(                       
                         		<a key={index} className="dropdown-item" href="#"><p>{element.name}</p><button>"p"</button></a> 
						)
					})}
				</div>				
			</div>
		</nav>		
	);
};




