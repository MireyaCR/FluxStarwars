import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";


export const Favorite = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<li className="list-group">				
					return (
						<li className="dropdown-item d-flex justify-content-between" href="#">
							key={index}
							{/* tienen que aparecer todos los elementos de la lista */}
							{/* añadir el boton papelera */}
							{/* preguntar por si pulsa la papelera */}
							{/* si se pulsa la papelera, el elemento se borra de la lista y el corazon cambia de color */}
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null
							{/* <button className="btn btn-success" onClick={() => actions.eliminarfavorito
							</button> */}
						</li>
					);
				</li>			
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	
	)
};
