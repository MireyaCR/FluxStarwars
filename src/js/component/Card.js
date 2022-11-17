import propTypes from "prop-types";
import notfound from "../../img/404.png";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import React,{useContext} from "react";


const Card=(props) =>{
    const history=useHistory();
    const { actions } = useContext(Context);  
    
    return(
    <div className="col-sm-2 card m-1" style={{padding:0}}>
            <div className="card-header" style={{padding:0}}>
                <img src={"https://starwars-visualguide.com/assets/img/"+props.typeImage+"/"+props.uid+".jpg"} style={{height:"16rem"}}className="card-img-top" onError={(event)=>event.target.src=notfound} alt="..."/>
            </div>
            <div className="card-body">
                    <p className="card-title"><strong>{props.name}</strong></p> 
                    <div className="d-flex justify-content-between">                                
                        <button onClick={()=>{
                            history.push("/single/"+props.uid,{type:props.type,typeImage:props.typeImage})
                        }} href="#" type="button" className="btn-sm btn-primary ">Learn More </button>       
                        
                        <button onClick={() => {
                             actions.addFavorite(props.uid,props.type);
                        }} type="button" className="btn btn-sm btn-primary">{props.like?'❤️':'🤍'}</button>
                     
                    </div>                         
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
        like:propTypes.bool,
        
       
};