const api_url = "http://localhost:4000/";

const getData = (route, method = "GET", body) => {
    console.log({body})
  return fetch(`${api_url}${route}${route.includes("?") ? "&" : "?"}`, {
    method: method,
    headers:{
        "Content-Type":"application/json"
    },
    body: method!=="GET" ? JSON.stringify(body) : undefined,
  }).then(async (data) => {
    if (data.status !== 200) console.error(await data.text());
    else return await data.json();
  });
};

export default getData;
