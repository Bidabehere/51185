function getUser() {
    
    fetch("http://localhost:8080/api/user")
    .then((response)=>{
        return response.json()
    })
    .then((dataJson)=>{
        console.log(dataJson)
    })

}

function addUser() {

    const user = {
        name: "Juan",
        email: "juan@mail.com"
    }

    fetch("http://localhost:8080/api/user",{
        headers:{
            "Content-type":"application/json"
        },
        method:"post",
        body: JSON.stringify(user)
    })
    .then((response)=>{
        return response.json()
    })
    .then((dataJson)=>{
        console.log(dataJson)
    })
    
    
}