const getDetail =(obj,key) =>{
  
    return fetch("https://www.swapi.tech/api/"+obj+"/"+key)
    .then(res => {
        console.log('RESPONSE',res)
        return res.json()
    })
    .then(data => {
        console.log('DATA RES',data.results)
        return data.result
    }) 
}
export default getDetail;
