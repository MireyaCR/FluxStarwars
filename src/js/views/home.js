import Card from "../component/Card.js";
import React,{useState,useEffect,useContext} from "react";
import { Context } from "../store/appContext";

export const Home=()=> {
  const { store, actions } = useContext(Context);  
   
  useEffect(()=>{
    actions.getPeople()
    actions.getPlanets()
    actions.getStarships()     
  }, [])
  
  return(
         <div className="container-fluid">          
            <nav id="navbar-example2-sm" className="justify-content-center navbar">
              <ul className="nav nav-pills-sm">
                 <li className="nav-item justify-content-between">
                    <a className="nav-link p-0  text-center" href="#scrollspyHeading1">People</a>
                 </li>
                 <li className="nav-item">
                    <a className="nav-link p-0 ms-3 text-center" href="#scrollspyHeading2">Starships</a>
                 </li>
                 <li className="nav-item">
                    <a className="nav-link p-0 ms-3" href="#scrollspyHeading3">Planets</a>
                 </li>    
              </ul>
            </nav>          
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-light p-3 rounded-2">
                <div className="row justify-content-sm-center ">     
                <h4 id="scrollspyHeading1">People</h4>    
                    {store.people.map((element,index)=>{
                      return (
                        <Card key={index} name={element.name} uid={element.uid} typeImage={'characters'} type={'people'} like={element.like}/>
                      )
                    })}          
                </div>                
                <div className="row justify-content-sm-center ms-2 mt-2">
                <h4 id="scrollspyHeading2">Startships</h4>
                    {store.starships.map((element,index)=>{
                      return (
                        <Card key={index} name={element.name} uid={element.uid} typeImage={'starships'} type={'starships'}  like={element.like}/>
                      )
                    })}                                                                       
                </div>
                <div className="row justify-content-sm-center ms-2 mt-2">
                <h4 id="scrollspyHeading3">Planets</h4> 
                      {store.planets.map((element,index)=>{
                        return (
                          <Card key={index} name={element.name} uid={element.uid} typeImage={'planets'} type={'planets'}  like={element.like}/>
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
