
const api_key= "96189bb142830682b0fa7642d6b2cc59"

const api_url= "https://api.themoviedb.org/"

const getData= (route,method="GET")=>{

    return fetch(`${api_url}3/${route}${route.includes("?") ? "&" :"?"}api_key=${api_key}`,{method:method})
    .then(async data=>{
        if (data.status !== 200) console.error(await data.text())
else 
return await data.json()
    })
}

export default getData;