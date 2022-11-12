import getLista from "../api/getLista";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people:[],
			starships:[],
			planets:[],
			favorites:[]
	},
		actions: {
			// Use getActions to call a function within a fuction
			getPeople:() =>{
				getLista('people').then(respuesta => {
					setStore({people:respuesta})
				  })    
				  .catch(err => {
					console.error('ERROR',err)
				  })
			},
			
			getStarships:() =>{
				getLista('starships').then(respuesta => {
					setStore({starships:respuesta})
				})
				.catch(err => {
					console.error('ERROR',err)
				  })				
			},
			getPlanets:() =>{
				getLista('planets').then(respuesta => {
					setStore({planets:respuesta})
				})
				.catch(err => {
					console.error('ERROR',err)
				  })				
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
