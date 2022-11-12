import Card from "../component/Card.js";
import React,{useState,useEffect} from "react";
import getLista from "../api/getLista.js";



export const Home=()=> {
  const [personajes, setPersonajes]=useState([])
  const [naves,setNaves]=useState([])
  const [planets,setPlanets]=useState([])
 
  useEffect(()=>{
    getLista('people').then(respuesta => {
      setPersonajes(respuesta)
    })    
    .catch(err => {
      console.error('ERROR',err)
    })
    getLista('starships').then(respuesta => {
      setNaves(respuesta)
    })    
    .catch(err => {
      console.error('ERROR',err)
    })
    getLista('planets').then(respuesta => {
      setPlanets(respuesta)
    })    
    .catch(err => {
      console.error('ERROR',err)
    })
  }, [])
  return(
          <div className="container-fluid">
            <div className="row justify-content-md-center m-5">         
                    {personajes.map((element,index)=>{
                      return (
                        <Card key={index} name={element.name} uid={element.uid} typeImage={'characters'} type={'people'}/>
                      )
                    })}          
            </div>   
            <div className="row justify-content-md-center m-5">
                    {naves.map((element,index)=>{
                      return (
                        <Card key={index} name={element.name} uid={element.uid} typeImage={'starships'} type={'starships'}/>
                      )
                    })}                                                                       
              </div>
              <div className="row justify-content-md-center m-5">
                    {planets.map((element,index)=>{
                      return (
                        <Card key={index} name={element.name} uid={element.uid} typeImage={'planets'} type={'planets'}/>
                      )
                    })}                                                                       
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
