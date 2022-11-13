import Card from "../component/Card.js";
import React,{useState,useEffect,useContext} from "react";
import getLista from "../api/getLista.js";
import { Context } from "../store/appContext";

export const Home=()=> {

  const { store, actions } = useContext(Context);  
  const [naves,setNaves]=useState([])
  const [planets,setPlanets]=useState([])
 
  useEffect(()=>{
    actions.getPeople()
    actions.getPlanets()
    actions.getStarships()   
  }, [])
  
  return(
         <div className="container-fluid px-0">
            <nav id="navbar-example2" className="navbar sticky-sm-top w-50 ms-5 px-5 mb-3">
              <ul className="nav nav-pills">
                 <li className="nav-item">
                    <a className="nav-link" href="#scrollspyHeading1">People</a>
                 </li>
                 <li className="nav-item">
                    <a className="nav-link" href="#scrollspyHeading2">Starships</a>
                 </li>
                 <li className="nav-item">
                    <a className="nav-link" href="#scrollspyHeading3">Planets</a>
                 </li>    
              </ul>
            </nav>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-light p-3 rounded-2" tabindex="0">
                <h4 id="scrollspyHeading1">People</h4>
                <div className="row justify-content-beteewn m-5">         
                    {store.people.map((element,index)=>{
                      return (
                        <Card key={index} name={element.name} uid={element.uid} typeImage={'characters'} type={'people'}/>
                      )
                    })}          
                </div>   
                <h4 id="scrollspyHeading2">Startships</h4>
                <div className="row justify-content-md-center m-5">
                    {store.starships.map((element,index)=>{
                      return (
                        <Card key={index} name={element.name} uid={element.uid} typeImage={'starships'} type={'starships'}/>
                      )
                    })}                                                                       
                </div>
                <h4 id="scrollspyHeading3">Planets</h4>   
                <div className="row justify-content-md-center m-5">
                      {store.planets.map((element,index)=>{
                        return (
                          <Card key={index} name={element.name} uid={element.uid} typeImage={'planets'} type={'planets'}/>
                        )
                      })}                                                                       
                </div> 
          </div>
        </div>
  )
}
// import React from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
// import "../../styles/home.css";

// export const Home = () => (
// 	<div className="text-center mt-5">
// 		<h1>Hello Rigo!</h1>
// 		<p>
// 			<img src={rigoImage} />
// 		</p>
// 		<a href="#" className="btn btn-success">
// 			If you see this green button, bootstrap is working
// 		</a>
// 	</div>
// );
