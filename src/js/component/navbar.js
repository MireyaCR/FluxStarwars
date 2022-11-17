import React, { useEffect,useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";


export const Navbar = () => {
	
	const { actions,store } = useContext(Context);  
	
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
			<div className="dropdown m-3 d-flex">
				<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					Favorite<span className="badge badge-light">{store.favorites.length}</span></button>
				<ul  className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
				{store.favorites.map((element,index)=>{ 
						return(               
                         		<li className="justify-content-between"><a className="dropdown-item" href="#">{element}</a><button>"p"</button></li> 
						)
					})}
				</ul>
				
			</div>
		</nav>		
	);
};




