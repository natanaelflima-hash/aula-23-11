async function dados() {
    const api = await fetch("https://jsonlaceholder.typicode.com/users");
    if(api.status === 200){
        console.log(api)
    }   
}


await dados();

console.log("a") 
