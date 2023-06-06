fetch('/api/current', {
    method:'GET',
    headers:{
        'authorization':`Bearer ${localStorage.getItem('token')}`
    }
}).then(response=>{
    if(response.status===401){
        window.location.replace('/login')
        return
    }else{
        return response.json();
    }
}).then(json =>{
    const p = document.getElementById('result');
    p.innerHTML = `Hola ${json.payload.first_name}, tu email es ${json.payload.email}`
})