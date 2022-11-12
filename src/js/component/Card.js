import propTypes from "prop-types";
import React from "react";
import notfound from "../../../public/assets/404.png";
import { useHistory } from "react-router-dom";


const Card=(props) =>{
    const history=useHistory();
    return(
    <div className="col-sm-2 card m-1" style={{padding:0}}>
            <div className="card-header" style={{padding:0}}>
                <img src={"https://starwars-visualguide.com/assets/img/"+props.typeImage+"/"+props.uid+".jpg"} className="card-img-top" onError={(event)=>event.target.src=notfound} alt="..."/>
            </div>
            <div className="card-body">
                    <p className="card-title"><strong>{props.name}</strong></p>                                  
                    <button onClick={()=>{
                        history.push("/detail/"+props.uid,{type:props.type,typeImage:props.typeImage})
                    }} href="#" type="button" className="btn-sm btn-primary float-start">Learn more </button>       
                    <button href="#" className="btn-sm btn-outline-danger float-end"><i className="far fa-heart"></i></button>                              
            </div>
    </div>
    )
}
export default Card

Card.propTypes={
        name:propTypes.string,
        uid:propTypes.string,
        url:propTypes.string,
        type:propTypes.string,
        typeImage:propTypes.string,
        
       
};