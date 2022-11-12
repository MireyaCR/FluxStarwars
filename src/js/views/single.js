import React, {  useEffect, useContext, } from "react";
import PropTypes from "prop-types";
import { Link,useLocation, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	 const { store, actions } = useContext(Context);
	 const params=useParams()
	 const {id} = useParams()

    const location=useLocation();

    useEffect(()=>{
		actions.getSingle(location.state.type,params.theid)       
    },[])

    

    return(
        <div className="container-fluid">
            <div className="card  mx-5 mt-2 mb-2" >
                <div className="row mx-auto">
                    <strong>{location.state.type.toUpperCase()}</strong>
                </div>
                <div className="row g-0">                
                    <div className="col-md-4 p-2">
                        <img src={"https://starwars-visualguide.com/assets/img/"+location.state.typeImage+"/"+params.theid+".jpg"} onError={(event)=>event.target.src=notfound} className="img-fluid rounded" alt="..."/>
                    </div>
                <div className="col-md-8 p-2">
                    <div className="card-body">
                        <ul ><h6> <strong>{store.detail.properties.name}</strong></h6>
                            {Object.keys(store.detail.properties).map((element,index)=>{
                            return (
                                <li key={index}>
                                    <small > {element} : {store.detail.properties[element]}</small>
                                </li>
                            )
                       })}
                       </ul>
                       <Link className="btn btn-primary btn-sm mx-5" to={"/"}>Home </Link> 
                    </div>
             </div>
         </div>
    </div>
</div>
    )
	// return (
	// 	<div className="jumbotron">
	// 		<h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>

	// 		<hr className="my-4" />

	// 		<Link to="/">
	// 			<span className="btn btn-primary btn-sm" href="#" role="button">
	// 				Back home
	// 			</span>
	// 		</Link>
	// 	</div>
	// );
};

Single.propTypes = {
	match: PropTypes.object
};
