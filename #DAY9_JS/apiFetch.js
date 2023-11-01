const url= "https://jsonplaceholder.typicode.com/todos/1";

fetch(url)
.then(urlToJson=>{
    if(urlToJson.ok){
        console.log("Success")
    }
    else{
        console.log("Failure")
    }
    return urlToJson.json()
    
}
)
.then(data => 
    Object.keys(data).forEach(item => {
        console.log(item+" : "+data[item]);
    })
    
)
.catch(errorMessage=> console.log(errorMessage))





