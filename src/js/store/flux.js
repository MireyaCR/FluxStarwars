import getDetail from "../api/getDetail";
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
			detail:{properties:{}},
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
			getSingle:(type, id)=>{
				getDetail(type,id).then(respuesta => {
					setStore({detail:respuesta})
				  })    
				  .catch(err => {
					console.error('ERROR',err)
				  })
			},
			getFavorites:()=>{
				const store= getStore()
				return store.favorites
			},
			addFavorite:(uid,type)=>{
				const store = getStore();
				let detail;
				const temp = store[type].map((element)=>{
					if (element.uid===uid){
						detail=element
						element.like=true
					}
					return element
				})
				switch (type) {
					case 'people':
						setStore({ people: temp})
						break;
					case 'startships':
						setStore({ starships: temp})
						break;
					case 'planets':
						setStore({ planets: temp})
						break;
				}

				const fav=store.favorites
				const favfilter=fav.filter((element)=>element.name==detail.name)
				if (favfilter.length==0){
					store.favorites.push({ ...detail, type});
					setStore({favorites: [...store.favorites]})
				}	
			},
			removeFavorite:(uid, type) =>{
				const store = getStore();
				const temp = store[type].map((element) => {
				  if (element.uid === uid) {
					element.like = false;
				  }
				  return element
				})
				switch (type) {
				  case "people":
					setStore({ people: temp });
					break;
				  case "startships":
					setStore({ starships: temp });
					break;
				  case "planets":
					setStore({ planets: temp });
					break;
				}
				store.favorites = store.favorites.filter((detail) => detail.uid !== uid);
				setStore({ favorites: [...store.favorites] });
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
